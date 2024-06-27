'use client'
import { Select, Option } from "@material-tailwind/react";

export function Filter() {
    return (
      <div className="bg-white h-auto w-72 m-1 rounded">
        <p className="text-black">Filtrar</p>
        <Select label="Marca" color="purple" className="mt-2 bg-white flex w-72 h-8 flex-col gap-6"> 
            <Option>Samsung</Option>
        </Select>
        <Select label="Marca" color="purple" className="mt-2 bg-white flex w-72 h-8 flex-col gap-6"> 
            <Option>Samsung</Option>
        </Select>
      </div>
    );
  }

//   <div className="w-72">
//         <Select label="Select Version">
//           <Option>Material Tailwind HTML</Option>
//           <Option>Material Tailwind React</Option>
//           <Option>Material Tailwind Vue</Option>
//           <Option>Material Tailwind Angular</Option>
//           <Option>Material Tailwind Svelte</Option>
//         </Select>
//       </div>