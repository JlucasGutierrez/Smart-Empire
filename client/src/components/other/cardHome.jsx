import Image from "next/image"
import CP from "../../img/CP.png"
import EV from "../../img/EV.png"
import CC from "../../img/CC.png"
import TO from "../../img/TO.png"


export const CardHome = () =>{
    return(
        <div className="flex justify-center">
            <div className=" m-3 w-48 h-64 border-2">
             <Image src={CP} className="w-auto h-auto"/>
             <p className="flex justify-center">Compra Protegida</p>
            </div>
            <div className=" m-3 w-48 h-64 border-2">
             <Image src={EV} className="w-auto h-auto"/>
             <p className="flex justify-center">Envios a Todo El Pais</p>
            </div>
            <div className=" m-3 w-48 h-64 border-2">
             <Image src={CC} className="w-auto h-auto"/>
             <p className="flex justify-center text-sm">Todos los Medios de Pago</p>
            </div>
            <div className=" m-3 w-48 h-64 border-2">
             <Image src={TO} className="w-auto h-auto"/>
             <p className="flex justify-center">Tiendas Oficiales</p>
            </div>
        </div>
        
        
    )
}