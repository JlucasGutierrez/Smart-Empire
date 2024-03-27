const { Router } = require("express");

const { createPhone } = require("../handlers/CreatePhoneHandler");
const { getphone } = require("../handlers/getPhoneHandlrer");

const phoneRouter = Router();

// phoneRouter.get("/", getPhoneHandlrer)
phoneRouter.post("/", createPhone) // crear

phoneRouter.get("/", getphone)



module.exports = phoneRouter