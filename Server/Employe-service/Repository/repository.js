const mysql = require('mysql');
const connection = require('../Config/config.js');
const { query } = require('../Config/config.js');

let employes = {};

employes.all = (search)=>{
    return new Promise((resolve,reject)=>{
        if(search){
             connection.query(`SELECT * from puntori WHERE Emri LIKE '%${search}%'`,(err,results)=>{
                if(err){
                    return reject(err);
                }
                return resolve(results);
            });
        }
        else{
            connection.query(`SELECT * from puntori `,(err,results)=>{
                if(err){
                    return reject(err);
                }
                
                return resolve(results);
            });
        }
    });
};

employes.one = (id) =>{
    return new Promise((resolve,reject)=>{
        connection.query(`SELECT * from puntori WHERE PuntoriId = ? `, [id] ,(err,results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results[0]);
        });
    });

};

employes.create=(employe)=>{
    return new Promise((resolve,reject) => {

        const query = "INSERT INTO Puntori (Emri,Mbiemri,Email,DataLindjes,StatusiPunes,NrTelefonit) VALUES (?,?,?,?,?,?);";
        connection.query(query,[employe.Emri,employe.Mbiemri,employe.Email,employe.DataLindjes,employe.StatusiPunes,employe.NrTelefonit],(err,result)=>{
            if(err){
                return reject(err);
            }
            return resolve(employe);
        });
    });
}

employes.delete= (id)=>{
    return new Promise((resolve,reject) =>{
        const query = "DELETE FROM Puntori WHERE PuntoriId = ?";
        connection.query(query,[id],(err,results)=>{
        if (err) {
            return reject(err);
        }
        return resolve(results);
        });
    });
}

employes.update = (id,employe) =>{
    return new Promise((resolve,reject)=>{
      const query = "UPDATE Puntori SET Emri = ?,Mbiemri = ?,Email=?,Paswordi = ?, DataLindjes = ?,NrTelefonit =? WHERE PuntoriId = ?";
      connection.query(query,[employe.Emri,employe.Mbiemri,employe.Email,employe.Paswordi,employe.DataLindjes,employe.NrTelefonit,id],(err,results)=>{
         if (err) {
            return reject(err);
         }
        return resolve(results);
         }); 
    });
}

employes.login = (email,pass) =>{
    return new Promise((resolve,reject)=>{
        const query = "SELECT Email,Paswordi FROM Puntori";
        connection.query(query,(err,results)=>{
            if (err) {
                return reject(err);
            }
            let em =  results[0].Email;
            let p =  results[0].Paswordi;
            if(em == email && p == pass){
                return resolve('connect');
            }else{
                return resolve("-------Email or Password Incorrect-------");
            }
         });
    });
}

module.exports = employes;