"use client"
import React from "react";
import Link from "next/link"
import { Login } from "../Login/login";

function Header(){
 
    return(
        <header class="bg-black bg-slate-900">
          <div className="flex justify-between w-full h-10 ">
            <div className="flex justify-start ml-5 ">
             
               <button className="text-neutral-50 transition hover:text-purple-500/75 text-white dark:hover:text-white/75 mr-3">
                 <Link href="/">Home</Link>
                </button>
  
              <button className="text-neutral-50 transition hover:text-purple-500/75 text-white dark:hover:text-white/75">Categorias</button>
            </div>
            <div className="flex justify-center mr-5 ">
              <div><Login/></div>
              {/* <button 
               className=" mr-3 group inline-block rounded bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
              >
                 <span className="block rounded-sm bg-black px-8 py-2 text-sm font-medium text-white group-hover:bg-transparent">
                 Login
                </span>
              </button> */}
              <button className="group inline-block rounded bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75">
                <span className="block rounded-sm bg-black px-8 py-2 text-sm font-medium text-white group-hover:bg-transparent">
                  Register
                </span>
              </button>
            </div>
          </div>
</header>
    )
}

export default Header;