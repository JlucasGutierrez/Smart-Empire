const { createPhone } = require("../controllers/CreatePhoneController");
  
  exports.createPhone = async (req, res) => {
    const { name, brandName, price } = req.body;
    try {
      const newPhone = await createPhone( name, brandName, price);
      res.status(201).json(newPhone);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };