"use client";
import styles from "./filter.module.css"
import { Select, Option } from "@material-tailwind/react";



const FilterPhone = () => (
    // <div className={styles.container}>
    //     <form>
    //     <p>Filtrar</p>
    //     <select>
    //     <option>Goku phone</option> 
    //     </select>
    //     <select name={Marca}/>
    //     <select name={Marca}/></form>
    // </div>
    <div className="w-72">
      <Select label="Select Version">
        <Option>Material Tailwind HTML</Option>
        <Option>Material Tailwind React</Option>
        <Option>Material Tailwind Vue</Option>
        <Option>Material Tailwind Angular</Option>
        <Option>Material Tailwind Svelte</Option>
      </Select>
    </div>

);


export default FilterPhone;


