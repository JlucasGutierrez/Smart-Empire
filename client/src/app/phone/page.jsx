import { CardPhone } from "@/components/Card/cardPhone";
import Header from "@/components/Header/header";


const Phone = () =>{
    return(
        <div className="bg-gray-700">
            <Header/>
            <div className="flex flex-wrap">
             <CardPhone/>
             <CardPhone/>
             <CardPhone/> 
            </div>
            
        </div>
    )
}

export default Phone;