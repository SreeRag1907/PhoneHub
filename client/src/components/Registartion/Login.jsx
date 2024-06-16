import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../authentication/firebase";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();

  const handleSignUpPage = () => {
    navigate("/sign-up");
  };


  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const handleSignUp =  async (e)=>{
    e.preventDefault();
    try {
        await signInWithEmailAndPassword(auth,email,password);
        console.log("Success");
        navigate("/");
        toast.success("Login Successfull!")
    } catch (error) {
        toast.error(error.message);
        
    }

  }

  return (
    <div className="py-20 ">
      <div className="flex h-full items-center justify-center mt-14">
        <div className="rounded-lg border border-black bg-white dark:bg-gray-900 shadow-lg shadow-black   text-black flex-col flex h-full items-center justify-center sm:px-4">
          <div className="flex h-full flex-col justify-center gap-4 p-6">
            <div className="left-0 right-0 inline-block border-gray-200 px-2 py-2.5 sm:px-4">
              <form onSubmit={handleSignUp} className="flex flex-col gap-4 pb-4">
                <h1 className="mb-4 text-2xl font-bold text-black dark:text-white text-center">Login</h1>
                <div>
                  <div className="mb-2">
                    <label className="text-sm font-medium text-black dark:text-white" htmlFor="email">
                      Email:
                    </label>
                  </div>
                  <div className="flex w-full rounded-lg pt-1">
                    <div className="relative w-full">
                      <input
                        className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-black  p-2.5 text-sm rounded-lg"
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) =>setEmail(e.target.value)}
                        placeholder="email@example.com"
                        required=""
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mb-2">
                    <label className="text-sm font-medium text-black dark:text-white" htmlFor="password">
                      Password
                    </label>
                  </div>
                  <div className="flex w-full rounded-lg pt-1">
                    <div className="relative w-full">
                      <input
                        className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-black p-2.5 text-sm rounded-lg"
                        id="password"
                        type="password"
                        name="password"
                        required=""
                        value={password}
                        onChange={(e) =>setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <p className="mt-2 text-xs cursor-pointer text-blue-500 hover:text-blue-600">
                    Forgot password?
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <button
                    type="submit"
                    className="transition border-2 bg-black text-white hover:bg-white hover:text-black border-black rounded-lg"
                  >
                    <span className="flex items-center justify-center gap-1 font-medium py-1 px-2.5 text-base false">
                      Login
                    </span>
                  </button>
                </div>
              </form>
              <div className="min-w-[270px]">
                <div className="mt-4 text-center text-black dark:text-white">
                  New user?
                  <a
                    className="ml-1 text-blue-500 hover:underline cursor-pointer"
                    onClick={handleSignUpPage}
                  >
                    Create account here
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
