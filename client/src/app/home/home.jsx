import Banner from "@/components/Banner/banner";
import Category from "@/components/Category/category";
import Header from "@/components/Header/header";
import Navbar from "@/components/NavBar/navbar";



const Home = () => {
    return(
        <div> 
         <Navbar/>
         <Header/>
         <Banner/>   
         <Category/>
        </div>
       
    )
}

export default Home;