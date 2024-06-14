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
        }
    ]

    const [active, setActive] = React.useState("https://samsungar.vtexassets.com/arquivos/ids/193743-800-auto?width=800&height=auto&aspect=true");
    return(
        <div className="grid gap-4">
            <div>
                <img src={active} alt="" className="flex flex-wrap lg:w-1/2 w-full lg:h-auto h-auto object-cover object-center rounded" />
            </div>
            <div className="grid grid-cols-5 gap-4">
                {data.map(({imagen}, index) => (
                    <div key={index}>
                        <img onClick={() => setActive(imagen)} src={imagen} alt="" className="h-20 cursor-pointer rounded-lg object-center" />
                    </div>
                ))}
            </div>
        </div>
    )
}





//   return (
//     <div className="grid gap-4">
//       <div>
//         <img
//           className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
//           src={active}
//           alt=""
//         />
//       </div>
//       <div className="grid grid-cols-5 gap-4">
//         {data.map(({ imgelink }, index) => (
//           <div key={index}>
//             <img
//               onClick={() => setActive(imgelink)}
//               src={imgelink}
//               className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
//               alt="gallery-image"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }