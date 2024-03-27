const { Phone, Brand} = require("../db");

exports.createPhone = async (name, brandName, price, brand) => {
  const response = await Phone.create({
    name,
    brandName,
    price,
  });
  
  // await Promise.all(brand.map(async (temp) => {
  //   const primerBrand = await Brand.findOne({ where: { name: temp } });
  //   if (primerBrand) {
  //     await response.addBrand(primerBrand);
  //   }
  // }))
  
  return response;
};