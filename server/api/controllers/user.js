//https://github.com/maitraiya/shopAPI/settings

const mongoose = require("mongoose");

const jwt = require("jsonwebtoken");

const User = require("../models/user");
const Events = require("../models/events");

exports.user_signup = async(req,res,next) => {
  const alreadyUser = await User.findOne({ email: req.body.email });
  if (alreadyUser)
    return res.status(400).json({
      message: "Email already exists."
    });
  
    const user = new User({
      _id: new mongoose.Types.ObjectId(),
      userName: req.body.userName,
      passWord: req.body.password,
      email: req.body.email,
      mobile: req.body.mobile,
      bloodGroup: req.body.bloodGroup,
      area: req.body.area,
      gender: req.body.gender
    });
    const savingUser = await user.save();
    if (savingUser)
      return res.status(201).json({
        message: "user created",
        result : savingUser
      });
    else
      return res.status(500).json({
        error: savingUser
      });
  };
  
exports.user_login = async(req, res, next) => {
  const alreadyUser = await User.findOne({ email: req.body.email });
  if (!alreadyUser)
    return res.status(400).json({
      message: "Please register first!"
    });
  
    const loginUser = await User.findOne({ email: req.body.email,passWord:req.body.password });
    if(loginUser) return res.status(200).json({
      message:'Login Successfull'
    })
    else return res.status(200).json({
      message:'Please enter valid email or password'
    })    
  
};

exports.user_vologin = async(req, res, next) => {
  const alreadyUser = await User.findOne({ email: req.body.email });
  if (!alreadyUser)
    return res.status(400).json({
      message: "Please register first!"
    });
  
    const loginUser = await User.findOne({ email: req.body.email,passWord:req.body.password });
    if(loginUser) return res.status(200).json({
      message:'Login Successful'
    })
    else return res.status(200).json({
      message:'Please enter valid email or password'
    })    
  
};

exports.user_fgpsswd = async(req, res, next) => {
  const alreadyUser = await User.findOne({ email: req.body.emailfrgpsswd });
  //console.log("already user : ",req.body.emailfrgpsswd);
  if (!alreadyUser) {
    return res.status(400).json({
      message: "Please register first!"
    });
  }
  
  const fgpsswdUser = await User.updateOne({passWord: req.body.passwordfrgpsswd });
  if(fgpsswdUser) 
  {
    console.log("already user : ",req.body);
    return res.status(200).json({
    message:'Password change Successfull'
    });
  }

  else 
  {
      return res.status(400).json({
      message:'Password change failed'
    });   
  }
    
};

exports.user_getEvents = async(req, res, next) => {
  const userData = await User.find({ });
  if (!userData) {
    return res.status(400).json({
      message: "Please register first!"
    });
  }
  else {
    return res.status(200).json({
      userData: userData
    });
  }
  
    // const loginUser = await User.findOne({ email: req.body.email,passWord:req.body.password });
    // if(loginUser) return res.status(200).json({
    //   message:'Login Successfull'
    // })
    // else return res.status(200).json({
    //   message:'Please enter valid email or password'
    // })    
  
};

exports.user_delete = (req, res, next) => {
  res.status(200).json({ msg: "user_delete works" });
};

exports.user_regEvents = async(req, res, next) => {
  try {
    const eventData = new Events({
      _id: new mongoose.Types.ObjectId(),
      eventsName: req.body.eventsName,
      eventLocation: req.body.eventsLocation,
      eventType: req.body.eventsType,
      eventDate: req.body.eventsDate,
      eventTime: req.body.eventsTime
  
    });
    const saveUser = await eventData.save();
    if (saveUser) {
      return res.status(200).json({
        message : "event registered"
      });
    }
  } catch(error) {
    
    return res.status(400).json({
      message: "Error : " + error.message
    });
  }
  
  
};

// exports.user_delete = (req, res, next) => {
//   res.status(200).json({ msg: "user_delete works" });
// };
