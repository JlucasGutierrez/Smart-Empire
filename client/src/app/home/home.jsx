import Banner from "@/components/Banner/banner";
import Category from "@/components/Category/category";
import Footer from "@/components/Footer/footer";
import Header from "@/components/Header/header";
import Navbar from "@/components/NavBar/navbar";



const Home = () => {
    return(
        <div> 
         <Navbar/>
         <Header/>
         <Banner/>   
         <Category/>
         <Footer/>
        </div>
       
    )
}

export default Home;