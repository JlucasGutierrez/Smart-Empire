import { useState, useEffect } from 'react';
import style from "./banner.module.css"

import Image from 'next/image';



const Banner = () => {
  const images = [
   //// agregar aqui los banners 
   //// ej require('../path/to/image1.jpg'),
   require('../../img/banMoto.jpg')
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Cambia la imagen cada 5 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={style.banner}>
      <Image src={images[currentImageIndex]} alt="Banner" />
    </div>
  );
};

export default Banner;
