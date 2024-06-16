import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [phones, setPhones] = useState([]);
  const [filteredPhones, setFilteredPhones] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPhones = async () => {
      try {
        const res = await fetch("/data.json");
        const data = await res.json();

        if (Array.isArray(data.phones)) {
          setPhones(data.phones);
          setFilteredPhones(data.phones);
        } else {
          console.error("Data fetched is not an array:", data);
        }
      } catch (error) {
        console.error("Error fetching phone details", error);
      }
    };

    fetchPhones();
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = phones.filter((phone) =>
      phone.model.toLowerCase().includes(query)
    );
    setFilteredPhones(filtered);
  };

  const handleNavigation = (model) => {
    navigate(`/product-details/${encodeURIComponent(model)}`);
    setSearchQuery("");
    setFilteredPhones([]);
  };

  return (
    <div className="max-w-screen-lg hidden md:block mx-auto mt-4">
      <div className="relative">
        <input
          className="w-full rounded-md py-2 px-4 mb-4 outline-none text-black focus:border-blue-500 transition-all duration-300 ease-in-out"
          type="text"
          placeholder="Search for phones"
          value={searchQuery}
          onChange={handleSearch}
        />
        {searchQuery.trim() !== "" && (
          <div className="absolute bg-white rounded-md shadow-md mt-2 w-full md:w-96">
            {filteredPhones.length > 0 ? (
              filteredPhones.map((phone) => (
                <div
                  key={phone.model}
                  onClick={() => handleNavigation(phone.model)}
                  className="flex flex-row items-center border-b dark:bg-gray-800 dark:border-white last:border-b-0 p-4 border-black border-2 cursor-pointer"
                >
                  <img
                    src={phone.images?.[0] || "/placeholder.png"}
                    alt={phone.model}
                    className="w-24 h-24 object-contain rounded-md mr-4"
                  />
                  <div>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">
                      {phone.model}
                    </p>
                    {/* Add other details here */}
                  </div>
                </div>
              ))
            ) : (
              <p className="mt-4 text-center text-gray-600 p-4">
                No phones found
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
