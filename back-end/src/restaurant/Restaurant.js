const express=require("express");
const bodyParser = require('body-parser')
const {loadUser}= require("./menu.js");
const { Router } = require("express");


function init(){

    const router =express.Router();

    router.use(express.json());

    router.use((req, res, next) => {

        console.log('API: method %s, path %s', req.method, req.path);
        
        console.log('Body', req.body);
        
        next();
    
    });
   
    router.use(bodyParser.urlencoded({
      
        extended: true
    
    }));


    router.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    router.get("/getRestaurant", async(req,res)=>{
        /*
        récuperer les message de tes amis
        */
       const resto=loadUser()

       
        res.json({
            status : 200,
            data: resto
        })
    })


    
    return router;

}

exports.default = init;