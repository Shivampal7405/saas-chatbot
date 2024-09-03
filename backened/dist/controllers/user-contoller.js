import User from "../models/User.js";
import mongoose from 'mongoose';
import { hash } from "bcrypt";
// establish MongoDB connection with increased timeout
mongoose.connect('mongodb://localhost:27017/mydatabase', {
    serverSelectionTimeoutMS: 30000 // increase timeout to 30 seconds
});
export const getAllUsers = async (req, res, next) => {
    try {
        // get all users
        const users = await User.find().exec(); // use exec() to execute the query
        return res.status(200).json({ message: "OK", users });
    }
    catch (error) {
        console.error(error); // use console.error instead of console.log
        return res.status(500).json({ message: "ERROR", cause: error.message }); // return 500 error instead of 200
    }
};
export const userSignup = async (req, res, next) => {
    try {
        // user signup
        const { name, email, password } = req.body;
        const hashedPassword = await hash(password, 10);
        const user = new User({ name, email, password: hashedPassword });
        await user.save();
        return res.status(200).json({ message: "OK", id: user._id.toString() });
    }
    catch (error) {
        console.error(error); // use console.error instead of console.log
        return res.status(500).json({ message: "ERROR", cause: error.message }); // return 500 error instead of 200
    }
};
export default getAllUsers;
//# sourceMappingURL=user-contoller.js.map