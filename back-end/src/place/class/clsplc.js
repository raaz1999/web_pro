const { resolve } = require("path");


class plc{

    constructor(db){
        this.db=db
        this.db.loadDatabase()
    }





    insert(username,adr,rating,lat,long,madeby){

        return new Promise((resolve,reject)=>{

            this.db.findOne({id:"index"},(err,doc)=>{
                
                if(err){

                    reject("index not found")
                
                }else{

                    console.log("index");
                    console.log(doc);

                    this.db.insert({
                        made:madeby,
                        Name: username,
                        adresse : adr,
                        note: rating,
                        latitude : lat,
                        longitude: long,
                        date: new Date()

                    },(err)=> {
                        if(err){

                            reject("error with the insertion !")
                        
                        }else{
                        
                            resolve("sussex !")
                        
                        }
                    })
                }
            })
            
        });
    }


    getallplaces(){
        // data =req.session
        return new Promise((resolve,reject)=>{
            this.db.find({_id:{ $exists: true }},(err,doc)=>{

                if(err){
                    reject("no data found !");
                }else{        
                    resolve(doc.sort((a, b) => b.date - a.date));
                }
            })
        })
       
    
    }

    close(){
        this.db.close();
    }

}

exports.default = plc;