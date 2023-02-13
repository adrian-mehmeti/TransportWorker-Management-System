const mysql = require('mysql');
const connection = require('../Config/config.js');

let truck_transports = {};

truck_transports.all = (search)=>{
    return new Promise((resolve,reject)=>{
        if(search){
            connection.query(`SELECT * from MjetetETransportit WHERE Modeli LIKE '%${search}%'`,(err,results)=>{
               if(err){
                   return reject(err);
               }
               return resolve(results);
           });
       }
       else{
           connection.query(`SELECT * from MjetetETransportit `,(err,results)=>{
               if(err){
                   return reject(err);
               }
               
               return resolve(results);
           });
       }
    });
};

truck_transports.one = (id) =>{
    return new Promise((resolve,reject)=>{
        connection.query(`SELECT * from MjetetETransportit WHERE MjetetId = ? `, [id] ,(err,results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results[0]);
        });
    });

};

truck_transports.create=(truck)=>{
    return new Promise((resolve,reject) => {

        const query = "INSERT INTO MjetetETransportit (Modeli,Tipi,VitiProdhimit,Madhesia,Gjendja) VALUES (?,?,?,?,?);";
        connection.query(query,[truck.Modeli,truck.Tipi,truck.VitiProdhimit,truck.Madhesia,truck.Gjendja],(err,result)=>{
            if(err){
                return reject(err);
            }
            return resolve(truck);
        });
    });
}

truck_transports.delete= (id)=>{
    return new Promise((resolve,reject) =>{
        const query = "DELETE FROM MjetetETransportit WHERE MjetetId = ?";
        connection.query(query,[id],(err,results)=>{
        if (err) {
            return reject(err);
        }
        return resolve(results);
        });
    });
}

truck_transports.update = (id,truck) =>{
    return new Promise((resolve,reject)=>{
      const query = "UPDATE MjetetETransportit SET Modeli =?,Tipi =?,VitiProdhimit =?,Madhesia =?,Gjendja =?  WHERE MjetetId = ?";
      connection.query(query,[truck.modeli,truck.tipi,truck.viti,truck.madhesia,truck.gjendja,id],(err,results)=>{
         if (err) {
            return reject(err);
         }
        return resolve(results);
         }); 
    });
}

module.exports = truck_transports;