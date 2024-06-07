

export const CardPhone = () => {
    return(
    <div className="group relative block bg-black w-52 h-100 mx-2">
      <img
       src="https://images.samsung.com/is/image/samsung/p6pim/es/2401/gallery/es-galaxy-s24-s928-491123-sm-s928bztheub-thumb-539444346"
       className="absolute inset-0 mt-20 opacity-75 transition-opacity group-hover:opacity-50"
       />
      <div className="relative p-4 sm:p-6 lg:p-8">
       <p className="text-sm font-medium uppercase tracking-widest text-pink-500">S23</p>
       <p className="text-xl font-bold text-white sm:text-2xl">Samsung</p>
       <div className="mt-64 ">
         <div className="">
           <p className="text-xs text-white">
           Posible descripcion 
           </p>
          </div>
       </div>
      </div>
   </div>
    )
}

///  mt-32 sm:mt-48 lg:mt-64
//// translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100