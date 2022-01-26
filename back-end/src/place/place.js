const express=require("express");
const bodyParser = require('body-parser')
const Datastore = require('nedb')
const plc= require("./class/clsplc.js");
const { Router } = require("express");





function init(){

    const router =express.Router();
    
    const db=new Datastore('newplace.db')

    db.loadDatabase()      // telecharger le fichier 


    const place=new plc.default(db);


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

    router.post("/newplace",async(req,res)=>{
        
        try{
           
            const {username,adr,rating,lat,long}=req.body 

            if(!username && !adr && !rating && !lat && !long){

                res.status(400).json({
                
                    status: 400,
                
                    "message": "message introuvable"
                
                })
                
                return;
            }
            
            if(await place.insert(username,adr,rating,lat,long)){

                res.status(200).json({
                    status:201,
                    "message" :"new place add !"
                })

            }

        }catch(err){
            
            res.status(500).json({
                
                status: 500,
                
                message: err,
                
                details: ("Erreur inconnue de catch").toString()
           
            });
        }
    })


    router.get("/get_place", async(req,res)=>{


        try{

            let allplc=await place.getallplaces();

            res.status(200).json({
                "data":allplc
            });
        
        }catch(err){
            
            res.status(500).json({
               
                status: 500,
               
                message: "erreur interne",
               
               
            
            })
         }
 
    })


    return router;

}


exports.default = init;

