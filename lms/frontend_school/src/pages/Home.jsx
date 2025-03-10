import React from 'react'
import AboutAs from '../components/home/new/AboutAs'
import Hero from '../components/home/new/Hero'
import  Contact from '../components/home/new/Contact'

const slides = [
  {
    image: "https://storage.googleapis.com/a1aa/image/CogI9dmZSsuG5yul4HAsNSOR017zs-RTeoaYuDfriY4.jpg",
    title: " Get Started with RAAVANAA!",
    subtitle: "",
    description: "Best Education Theme of 2025 – The perfect choice for your learning journey. Elevate your education with the best resources and expert guidance.",
    buttonText: "JOIN NOW",
    buttonLink: "/login",
  }
];

export default function Home() {
  return (
    <div>
      <Hero slides={slides} />
      <AboutAs />
      <Contact />
    </div>
  )
}
