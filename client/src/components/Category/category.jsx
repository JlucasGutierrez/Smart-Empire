"use client"
import Image from "next/image";
import phone from "./../../img/phone.png"
import per from "./../../img/per.png"
import pc from "./../../img/pc.png"
import comp from "./../../img/comp.png"
import acces from "./../../img/acces.png"
import compl from "./../../img/compl.png"

import Link from "next/link";


const Category = () => {
    return(
     <div class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="flex w-full mb-20 flex-wrap">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Tecnología que Transforma</h1>
            <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Nos dedicamos a ofrecerte una amplia selección de celulares y computadoras de última generación que no solo cumplen con tus necesidades tecnológicas, sino que también mejoran tu día a día.</p>
          </div>
          <div class="flex flex-wrap md:-m-2 -m-1 ">
            <div class="flex flex-wrap w-1/2">
             <div class="md:p-2 p-1  ">
                <Link href="/phone"
                ><p>Celulares</p>
                  <Image alt="gallery" class=" object-cover object-center block rounded-md" src={phone} /></Link>
              </div>
              <div class="md:p-2 p-1 w-1/2 ">
                <p>Accesorios</p>
                <Image  alt="gallery" class=" object-cover  object-center block rounded-md" src={acces} />
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <p>Tablet,SmartWatch Auriculares</p>
                <Image alt="gallery" class=" object-cover  object-center block rounded-md" src={compl} />
              </div>
            </div>
            <div class="flex flex-wrap w-1/2">
              <div class="md:p-2 p-1 w-full">
                <p>Computadoras</p>
                <Image alt="gallery" class=" object-cover object-center block rounded-md" src={pc} />
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <p>Accesorios Gaming</p>
                <Image alt="gallery" class=" object-cover object-center block rounded-md" src={per} />
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <p>Componentes Para tu Pc</p>
                <Image alt="gallery" class=" object-cover object-center block rounded-md" src={comp} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Category;