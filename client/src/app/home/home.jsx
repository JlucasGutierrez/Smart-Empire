import Banner from "@/components/Banner/banner";
import Category from "@/components/Category/category";
import Footer from "@/components/Footer/footer";
import Header from "@/components/Header/header";
import Navbar from "@/components/NavBar/navbar";
import { CardHome } from "@/components/other/cardHome";



const Home = () => {
    return(
        <div> 
         <Navbar/>
         <Header/>
         <Banner/>
         <CardHome/>   
         <Category/>
         <Footer/>
        </div>
       
    )
}

export default Home;