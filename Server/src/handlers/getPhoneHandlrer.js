const { getPhones } = require("../controllers/getPhoneController");

const getphone = async(req,res) => {
    try{
        const phone = await getPhones();
        res.status(200).json(phone)
    }catch (error){
        res.status(404).json({error: error.message})
    }
};

module.exports = { getphone}