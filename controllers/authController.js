const bcrypt = require("bcryptjs");

const userModel = require("../models/userModel");
exports.authenticaterUser = (req, res) => {
    const { email, password } = req.body;
    userModel
        .findOne({ email })
        .then((user) => {
            if (!user) {
                return res.status(400).json({ error: "user nor found" });
            }
            bcrypt.compare(password, user.password, (err, result) => {
                if (err) {
                    res.status(500).json({error:err.message})
                } else if (res) {
                    res.status(200).json({message:"authentication was successful"})
                } else {
                    res.status(410).json({error:"authentication failed"})
                }
            }
            );
        })
    .catch((err)=>res.status(500).json({error:err.message}))
    };

    