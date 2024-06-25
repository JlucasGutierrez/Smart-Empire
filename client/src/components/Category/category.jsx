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
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Master Cleanse Reliac Heirloom</h1>
            <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
          </div>
          <div class="flex flex-wrap md:-m-2 -m-1">
            <div class="flex flex-wrap w-1/2">
             <div class="md:p-2 p-1 w-full">
                <Link href="/phone"
                ><Image alt="gallery" class=" object-cover object-center block rounded-md" src={phone} /></Link>
              </div>
              <div class="md:p-2 p-1 w-1/2 ">
                <Image  alt="gallery" class="w-full object-cover h-full object-center block rounded-md" src={acces} />
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <Image alt="gallery" class="w-full object-cover h-full object-center block rounded-md" src={compl} />
              </div>
            </div>
            <div class="flex flex-wrap w-1/2">
              <div class="md:p-2 p-1 w-full">
                <Image alt="gallery" class=" object-cover object-center block rounded-md" src={pc} />
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <Image alt="gallery" class=" object-cover object-center block rounded-md" src={per} />
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <Image alt="gallery" class="w-full object-cover h-full object-center block rounded-md" src={comp} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Category;