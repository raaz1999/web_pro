const express=require("express");
const bodyParser = require('body-parser')
const data =require("sqlite3");
const New_user = require("./input/user.js");







function init(){

    const router =express.Router();       // creation du routeur 
         
    router.use(express.json());         // configuré le routeur pour utiliser le format json 

    router.use((req, res, next) => {          // afficher les requetes solicites par le serveur 

        console.log('API: method %s, path %s', req.method, req.path);
        
        console.log('Body', req.body);
        
        next();
    });


    router.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    const db=new data.Database("mydata",(err)=>{      
        if(err){
        
            throw err;
    
        }
    
    });
       
    const user= new New_user.default(db)                  
 
    router.use(bodyParser.urlencoded({
    
        extended: true
      
    }));

    router.post("/register", async (req, res) => {        
        
        try{

            const {email ,name, password}=req.body
            console.log("here")
            console.log(email)
            if(!email || !name || !password){   

                res.status(401).json({     
                    status: 401,            
                    "message": "Requête invalide : il faut remplire tout les champs !"
                })
                
                return;
            }
            
            
            if(await user.exists(email,name)){   // une verification de l'existance de cette utilisateur 
                
                res.status(401).json({
                
                    status: 500,
                
                    "message": "l'utilisateur existe deja !!"
                
                })

            }else{

                if(await user.register(email,name,password)){ // creation de notre utilisateur 

                    res.status(201).json({
                
                        status: 200,
                    
                        "message": "utilisateur crée !"
                    
                    })
               
                }

            }
                
               

        }catch(err){
            
            res.status(500).json({

                status: 500,
                
                message: err,
    
            });
        }
    })



    router.post("/login", async(req,res)=>{

        const {name, password}=req.body    //recupérer l'email et le password du body    
        


        try{
        const data=await user.existsuser(name,password) // si l'utilisateur a entré les bons identifiant on lui crée sa session 
            
            


            res.status(201).json({
                status:201,
                "message":"maintenant tu peut ajouter des lieus"
            })
        
        }catch(e){
            

            console.log(e)
            res.json({
        
                status: 500,
        
                "message": "error"
            });
            
        }

        return;
        
    });
    
   

    return router;
}


exports.default = init;