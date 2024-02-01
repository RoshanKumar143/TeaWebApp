const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config');
const User = require('../model/userSchema');
const router = express.Router();

router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json());
//why to use this?  => Whatever we pass in the form of body, that have to getted encrypted for that required bodyParser



//Creating Routes

//list all users
router.get('/users',(req,res) => {
    User.find({},(err,user) => {
        if(err) throw err;
        res.send(user)
    })
})



//To Register The User
router.post('/register',(req,res) => {
    let hashPassword = bcrypt.hashSync(req.body.password,8);
    User.create({
        name:req.body.name,
        email:req.body.email,
        password:hashPassword,  //since password got encrypted.
        phone:req.body.phone,
        role:req.body.role?req.body.role:'User'
    },(err,result) => {
        res.status(200).send('Register Successful')
    })
})


// To login User
router.post('/login',(req,res) => {
    User.findOne({email:req.body.email}, (err,user) => {
        if(err) return res.status(500).send({auth:false,token:'There is problem while login'})
        if(!user) return res.status(201).send({auth:false,token:'No User Found Register First'})
        else{
            const passIsvalid = bcrypt.compareSync(req.body.password,user.password)
            if(!passIsvalid) return res.status(201).send({auth:false,token:'Invalid Password'});
            let token = jwt.sign({id:user._id}, config.secret,{expiresIn:86400})
            return res.status(200).send({auth:true,token});
        }
    })
})



//how we can get User Info. => with help of Token only(and we take token from header only not from URl)
    //userInfo.
router.get('/userInfo', (req,res) => {
    let token = req.headers['x-access-token'];
    if(!token) return res.status(201).send({auth:false,token:'No Token Provided'})
    jwt.verify(token,config.secret,(err,data) => {
        if(err) return res.status(201).send({auth:false,token:'Invalid Token'})
        //when token got de-crypt we get ID
        User.findById(data.id,(err,user) => {
            res.send(user)
        })
    })
})


module.exports = router;

