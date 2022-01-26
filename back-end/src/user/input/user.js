const express = require("express");
const { connect } = require("http2");
const { resolve } = require("path");



class New_user{
    
    constructor(db){
        this.db=db
        this.db.run("CREATE TABLE IF NOT EXISTS data(user_id INTEGER PRIMARY KEY  AUTOINCREMENT,name VARCHAR(100),email VARCHAR(100),password VARCHAR(100))");

    }


    register(email,name,password){

        return new Promise((resolve,reject)=>{

            const stmt=this.db.prepare("INSERT INTO data(name,email,password) VALUES(?,?,?)")
            
            stmt.run([name,email,password],(err)=>{
                
                if(err){
                     reject("impossible de crée cette utilisateur !");           
                }

                console.log(this.us)
                resolve("utilisateur crée avec succés")
            })
        
            
        })
    }

    exists(email,name){

        console.log(email,name)
        return new Promise((resolve,reject)=>{

            let requete ="SELECT email , name FROM data WHERE email=? AND name=?"
            this.db.all(requete, [email,name], (err, data) => {
            
                if (err) {
                    reject("erreur dans notre base de donnée ")
                } else {
            
                    if (data.length != 0) {
                        resolve(1)  // 1 indique que l'utilisateur existe déja, 0 sinon 
                    } else {
                        resolve(0)   //  sinon
                    }
                }
            });
            
        })

    }

    existsuser(name,password){

        return new Promise((resolve,reject)=>{

            let requete ="SELECT email, password , user_id ,name FROM data WHERE name=? AND password=?"               
                this.db.all(requete, [name, password], (err, data) => {
                    
                    if (err) {
                        reject("erreur a au niveau de la base de donnée")
                    } else {
                        console.log(data.length)
                        if (data.length != 0) {               
                            resolve(data[0]) // de la meme maniere que dans la fonction précédante                     
                        } else {               
                            reject("mot de passe ou email incorrect !")
                        }
                    }
                });
                
    });
    
    
    }

    closedb(){

        this.db.close((err)=>{
            
        if(err){
            throw err
        }

        console.log("you succesfuly close your data base !!!!!!")
        
    })
    }
}

exports.default = New_user;