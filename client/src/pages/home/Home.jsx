import React from 'react'
import Hero from '../../components/Home/Hero'
import Details from '../../components/Home/Detail'
import LatestProducts from '../../components/Products/LatestProducts'
import InfiniteSlider from '../../components/Home/InfiniteSlider'
import { TypewriterEffect } from'../../components/TypewriterEffect';
import OfferBanner from '../../components/Home/OfferBanner'
import Testimonials from '../../components/Home/Reviews'
const Home = () => {



  const words = [
    { text: 'Hello' },
    { text: 'world' },
    { text: 'This is a typewriter effect!' },
  ];
  return (
    <>
    <Hero/>
    <Details/>
    <LatestProducts/>
    <InfiniteSlider/>
    {/* <TypewriterEffect words={words} /> */}
    <OfferBanner/>
    <Testimonials/>
    </>
  )
}

export default Home