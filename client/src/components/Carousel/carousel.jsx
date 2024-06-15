"use client"
import React from "react";

export function CarouselDetail() {
    const data = [
        {
            imagen:"https://samsungar.vtexassets.com/arquivos/ids/193744-800-auto?width=800&height=auto&aspect=true"
        },
        {
            imagen:"https://samsungar.vtexassets.com/arquivos/ids/193743-800-auto?width=800&height=auto&aspect=true"
        },
        {
            imagen:"https://samsungar.vtexassets.com/arquivos/ids/193747-800-auto?width=800&height=auto&aspect=true"
        },
        {
            imagen:"https://samsungar.vtexassets.com/arquivos/ids/193753-800-auto?width=800&height=auto&aspect=true"
        }
    ]

    const [active, setActive] = React.useState("https://samsungar.vtexassets.com/arquivos/ids/193743-800-auto?width=800&height=auto&aspect=true");
    return(
        <div className="grid gap-4">
            <div className="">
                <img src={active} alt="" className="" />
            </div>
            <div className=" flex ">
                {data.map(({imagen}, index) => (
                    <div key={index} className="">
                        <img onClick={() => setActive(imagen)} src={imagen} alt="" className=" bg-white h-24 w-24 cursor-pointer rounded-lg object-cover object-center" />
                    </div>
                ))}
            </div>
        </div>
    )
}





