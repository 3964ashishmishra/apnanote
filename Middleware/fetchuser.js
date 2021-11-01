const jwt = require("jsonwebtoken");
const JWT_SECRET = "ashishisgoodathtmlcssjavascript";



const fetchuser =  (req, res ,next) => {

    const token = req.header('auth-token');

    if(!token){
        res.status(401).send({Error: "Verfiy with valid token"})
    }

    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;   
        next()
    } catch (error) {
        res.status(401).send({Error: "Authenticate the user"})
    }
}

module.exports = fetchuser;