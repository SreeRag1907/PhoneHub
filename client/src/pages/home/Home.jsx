import React from 'react'
import Hero from '../../components/Home/Hero'
import Details from '../../components/Home/Detail'
import LatestProducts from '../../components/Products/LatestProducts'
import InfiniteSlider from '../../components/Home/InfiniteSlider'
import OfferBanner from '../../components/Home/OfferBanner'
import Testimonials from '../../components/Home/Reviews'
const Home = () => {



  
  return (
    <>
    <Hero/>
    <Details/>
    <LatestProducts/>
    <InfiniteSlider/>
    <OfferBanner/>
    <Testimonials/>
    </>
  )
}

export default Home