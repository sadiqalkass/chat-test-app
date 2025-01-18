import jwt from "jsonwebtoken";
import User from '../models/user.model.js'

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      return res
        .status(401)
        .json({ error: "Unauthorised - No token provided" });
    }

    const decode = jwt.verify(token, process.env.JWT_SECRET);

    if (!decode) {
      return res.status(401).json({ error: "Unauthorised -  Invalid token" });
    }

    const user = await User.findById(decode.userId).select("-password")

    if(!user){
      return res.status(401).json({ error: "User Not Found" });
    }

    req.user = user

    next()

  } catch (error) {
    console.log("Error in protectRoute middleware", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
