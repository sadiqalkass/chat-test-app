import User from "../models/user.model.js";

export const getUsersForSidebar =async (req,res) =>{
    try {

        const loggedInUserId = req.user._id

        const filterdUsers = await User.find({_id: { $ne: loggedInUserId } }).select("-password")
        
        res.status(200).json(filterdUsers)

    } catch (error) {
        console.log("Error in getUsersForSidebar controller", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}