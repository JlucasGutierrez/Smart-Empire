import { CardPhone } from "@/components/Card/cardPhone";
import { Filter } from "@/components/Filter/filter";
import Footer from "@/components/Footer/footer";
import Header from "@/components/Header/header";


const Phone = () =>{
    return(
        <div className="bg-gray-200 w-full h-auto">
            <Header/>
            <div className="flex flex-wrap w-full">
                <div><Filter/></div>
                <div><CardPhone/></div>
            </div>
            <Footer/>
        </div>
    )
}

export default Phone;