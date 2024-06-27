import { BannerPhone } from "@/components/Banner/bannerPhone";
import { BrandPhone } from "@/components/Card/brandPhone";
import { CardPhone } from "@/components/Card/cardPhone";
import { Filter } from "@/components/Filter/filter";
import Footer from "@/components/Footer/footer";
import Header from "@/components/Header/header";


const Phone = () =>{
    return(
        <div className=" w-full h-auto bg-gray-50">
            <Header/>
            <BannerPhone/>
            <div className="flex justify-center">
                    <p>SMARTPHONES</p>
                </div>
            <BrandPhone/>
            <div className="flex flex-wrap w-full">
                <div><Filter/></div>
                <div><CardPhone/></div>
            </div>
            <Footer/>
        </div>
    )
}

export default Phone;