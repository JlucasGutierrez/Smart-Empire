import Image from "next/image";
import logo from "../../img/logo1.jpg"


const Footer = () =>{
    return(
        <footer className="bg-black">
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="sm:flex sm:items-center sm:justify-between">
      <div className="flex justify-center text-teal-600 sm:justify-start">
 
        <Image src={logo} width={250} height={97} alt={logo} />

      </div>

      <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
        Copyright &copy; 2024. All rights reserved.
      </p>
    </div>
  </div>
</footer>
    )
}

export default Footer;