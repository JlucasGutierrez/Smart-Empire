"use client"
import { Carousel } from "@material-tailwind/react";
import Image from "next/image";
import { useState, useEffect } from 'react';
const Banner = () =>{
    const images = [
        require('../../img/banMoto2.png'),
        require('../../img/banSam.jpg'),
        require('../../img/banIphone.jpg'),
        require('../../img/banHua.jpg')
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Cambia la imagen cada 5 segundos
    
        return () => clearInterval(interval);
      }, [images.length]);

    return(
        <Carousel loop={true} autoplay={true} className="rounded-xl max-w-full">
        <Image 
        className="h-full w-full object-cover object-center" 
        src={images[currentImageIndex]} alt="Banner"/>
      </Carousel>
    )
}

export default Banner;