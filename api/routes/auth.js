const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require('bcrypt')

//REGISTER
router.post("/register", async (req, res) => {
    try {

        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt)
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass,
        });

        //save user
        const user = await newUser.save();
        res.status(200).json(user);
    } catch(err) {
        res.status(500).json(err);
    }
})

// LOGIN
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) {
            return res.status(400).json("Wrong credentials!"); // Stop execution if user is not found
        }

        const validated = await bcrypt.compare(req.body.password, user.password);
        if (!validated) {
            return res.status(400).json("Wrong credentials!"); // Stop execution if password is incorrect
        }

        const { password, ...others } = user._doc; // Assuming `user._doc` is the actual user object
        res.status(200).json(others); // Send response with user data, excluding the password
    } catch (err) {
        res.status(500).json(err); // Handle other server errors
    }
});

module.exports = router;
