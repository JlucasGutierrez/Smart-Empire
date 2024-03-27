// const { Celulares } = require("../../DB/Phone.json");
// const { Marcas } = require("../../DB/Brand.json");
// const { Brand, Phone } = require("../db");

// exports.celu = async (req, res) => {
//   try {
//     console.log("Creating Phone");
//     Celulares.map(async (celu) => {
//       let marcaInstance = await Brand.findOne({
//         // where: { name: celu.marca },
//       });

//       await Phone.create({
//         name: celu.name,
//         brandName: celu.brandName,
//         image: celu.image,
//         price: celu.price,
//         color: celu.color,
//         description: celu.description,
//         details: celu.details,
//         CategoryId: marcaInstance.id,
//       });
//     });

//     console.log("Phone saved in DB");
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// exports.Marca = async (req, res) => {
//   try {
//     console.log("Creating Brand");
//     const marca = Marcas.map((brand) => ({
//       name: brand.name,
//     }));
//     await Brand.bulkCreate(marca);
//     console.log("Brand saved in DB");
//   } catch (error) {
//     console.log(error.message);
//   }
// };