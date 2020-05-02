const express = require("express");
const router = express.Router();

const UserController = require('../controllers/user');

router.post("/volregister", UserController.user_signup);

router.post("/vologin", UserController.user_vologin);

router.post("/fgpsswd", UserController.user_fgpsswd);

router.post("/registerEvents", UserController.user_regEvents);

router.get("/events", UserController.user_getEvents);







module.exports = router;
