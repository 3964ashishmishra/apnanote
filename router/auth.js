const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require("bcryptjs")
const fetchuser = require("../Middleware/fetchuser");
const User = require("../model/user");
const jwt = require("jsonwebtoken");


const JWT_SECRET = "ashishisgoodathtmlcssjavascript";


router.post('/', [

    body('name', 'Name should contain 3 char').isLength({ min: 3 }),
    body('email', 'Invalid Email').isEmail(),
    body('password', "Password should contain 5 char").isLength({ min: 5 }),
    body('cpassword', "password and cpassword should be same").isLength({ min: 5 })
],

    async (req, res) => {

        let sucess = false;

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({sucess, errors: errors.array() });
        }


        try {

            // Checking eamil exist or not
            let existEmail = await User.findOne({ email: req.body.email })
            if (existEmail) {
                return res.status(400).json({sucess, Emailerror: "Email already exist" });
            }


            // Hashing Pasword and confirm password
            const salt = await bcrypt.genSalt(10);
            const hashPass = await bcrypt.hash(req.body.password, salt)
            const chashPass = await bcrypt.hash(req.body.cpassword, salt)


            // checking password is same or not
            let samePassword = (hashPass === chashPass);
            if (!samePassword) {
                return res.status(400).json({sucess, Passworderror: "Not Match" });
            }

            // Creating user
            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: hashPass,
                cpassword: chashPass,
            })

            // Generating auth token
            const data = {
                user: {
                    id: user.id
                }
            }

            
            const authToken = jwt.sign(data, JWT_SECRET)
            // console.log(authToken);
            
            sucess = true;
            res.status(200).json({sucess,authToken })


            //    res.send(user)
            // res.status(200).json({ Msg: 'Succefully Registered' })
        }
        catch (error) {
            res.status(500).send(sucess,"Some Error Occured")
        }
    })




router.post('/login', [

    body('email', 'Invalid Email').isEmail(),
    body('password', 'password cannot be empty').exists()
],

    
    async (req, res) => {

        let sucess = false;

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;

        try {
            // Checking email is matching or not
            let existEmail = await User.findOne({ email })
            if (!existEmail) {
                sucess=false;
                return res.status(400).json({sucess,Error: "Invalid Email Credential" })
            }
            
            // Comparing Password
            const comparePass = await bcrypt.compare(password, existEmail.password)
            if (!comparePass) {
                sucess=false;
                return res.status(400).json({ sucess,Error: "Invalid Password Credential" })
            }

            // return res.status(200).json({Success: "Successfully Login"})
            // Generating auth token
            const data = {
                user: {
                    id: existEmail.id
                }
            }
            
            const authToken = jwt.sign(data, JWT_SECRET)
            // console.log(authToken);
            sucess= true;
            res.status(200).json({sucess,authToken })
            


        } catch (error) {
            res.status(500).json({ Error: 'Error' })
        }
    })


router.post("/getuser", fetchuser, async (req,res)=>{

    try {
        userId = req.user.id;
        const user = await User.findById(userId).select("-password -cpassword");
        res.send(user)

    } catch (error) {
        console.log(error);
        res.status(500).json({ Error: 'Error' })
    }

})



module.exports = router