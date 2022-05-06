const Users = require('../models/userModel')
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
const userCntrl = {
    register: async(req, res) => {
        try {
            const { name, email, password } = req.body

            const user = await Users.findOne({ email })
            if (user) return res.status(400).json({ msg: "the email already exists." })

            if (password.length < 6)
                return res.status(400).json({ msg: "Password is at least 6 characters long." })
                    // Password Encrypion
            const passwordHash = await bcrypt.hash(password, 10)
            const newUser = new Users({ name, email, password, passwordHash })
                // save in mongodb
            await newUser.save()
                // create jsonwebtoken to authentication





            res.json({ password, passwordHash })
                // res.json({ msg: "Register Succes!" })

        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    }

}




module.exports = userCntrl