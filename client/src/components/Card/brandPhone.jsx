import Image from "next/image"
import logoS from "../../img/logoS.png"
import logoM from "../../img/logoM.png"
import logoA from "../../img/logoA.png"
import logoX from "../../img/logoX.png"


export const BrandPhone = () =>{
    return(
        <div className="flex justify-center bg-white m-1 ">
            <div className="flex flex-col justify-center m-1 mr-5">
                <div className="flex justify-center ">
                    <Image className="h-28 w-28 rounded-full border-2 border-gray-400" src={logoS}/>
                </div>
                <div className="flex justify-center">Samsung</div>
            </div>
            <div className="flex flex-col justify-center m-1 mr-5">
                <div className="flex justify-center ">
                    <Image className="h-28 w-28 rounded-full border-2 border-gray-400" src={logoM}/>
                </div>
                <div className="flex justify-center">Motorola</div>
            </div>
            <div className="flex flex-col justify-center m-1 mr-5">
                <div className="flex justify-center ">
                    <Image className="h-28 w-28 rounded-full border-2 border-gray-400" src={logoA}/>
                </div>
                <div className="flex justify-center">IPhone</div>
            </div>
            <div className="flex flex-col justify-center m-1 mr-5">
                <div className="flex justify-center ">
                    <Image className="h-28 w-28 rounded-full border-2 border-gray-400" src={logoX}/>
                </div>
                <div className="flex justify-center">Xiaomi</div>
            </div>
        </div>
    )
}


{/* <div class=" bg-black sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
      </div> */}



// rounded-full h-28 w-28 border-2 border-gray-400