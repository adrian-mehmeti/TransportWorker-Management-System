const mysql = require('mysql');
const connection = require('../Config/config.js');
const axios = require('axios');

let requests = {};

requests.allInformo = ()=>{
    return new Promise((resolve,reject)=>{
        connection.query(`SELECT * from kerkesa Where Tipi = ?`,['informo'],(err,results)=>{
            if(err){
                return reject(err);
            }  
            let rowsKerkesa = [];
            
            for(let i=0;i<results.length;i++){
                let person = new Object();
                let puntoriId = results[i].PuntoriId;
                
                axios.get("http://localhost:3001/employe/"+puntoriId)             
                .then((employeResponse)=>{
                        person.emri = employeResponse.data.Emri;
                        person.mbiemri = employeResponse.data.Mbiemri;
                        person.informacioni = results[i].Kerkesa
                        rowsKerkesa.push(person);
                        if(rowsKerkesa.length == results.length){
                            resolve(rowsKerkesa);
                        }
                });
            }
        });
    });
};

requests.allProdukt = ()=>{
    return new Promise((resolve,reject)=>{
        connection.query(`SELECT * from kerkesa Where Tipi = ?`,['Produkt'],(err,results)=>{
            if(err){
                return reject(err);
            }  
            let rowsKerkesa = [];
            
            for(let i=0;i<results.length;i++){
                let person = new Object();
                let puntoriId = results[i].PuntoriId;
                
                axios.get("http://localhost:3001/employe/"+puntoriId)             
                .then((employeResponse)=>{
                        person.emri = employeResponse.data.Emri;
                        person.mbiemri = employeResponse.data.Mbiemri;
                        person.informacioni = results[i].Kerkesa
                        rowsKerkesa.push(person);
                        if(rowsKerkesa.length == results.length){
                            resolve(rowsKerkesa);
                        }
                });
            }
        });
    });
};

requests.allPersonale = ()=>{
    return new Promise((resolve,reject)=>{
        connection.query(`SELECT * from kerkesa Where Tipi = ?`,['Personale'],(err,results)=>{
            if(err){
                return reject(err);
            }  
            let rowsKerkesa = [];
            
            for(let i=0;i<results.length;i++){
                let person = new Object();
                let puntoriId = results[i].PuntoriId;
                
                axios.get("http://localhost:3001/employe/"+puntoriId)             
                .then((employeResponse)=>{
                        person.emri = employeResponse.data.Emri;
                        person.mbiemri = employeResponse.data.Mbiemri;
                        person.informacioni = results[i].Kerkesa
                        rowsKerkesa.push(person);
                        if(rowsKerkesa.length == results.length){
                            resolve(rowsKerkesa);
                        }
                });
            }
        });
    });
};

requests.one = (id) =>{
    return new Promise((resolve,reject)=>{
        connection.query(`SELECT * from kerkesa WHERE KerkesaId = ? `, [id] ,(err,results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results[0]);
        });
    });

};

requests.create=(request)=>{
    return new Promise((resolve,reject) => {

        const query = "INSERT INTO kerkesa (Kerkesa,Tipi) VALUES (?,?);";
        connection.query(query,[request.Kerkesa,request.Tipi],(err,result)=>{
            if(err){
                return reject(err);
            }
            return resolve(request);
        });
    });
}

requests.delete= (id)=>{
    return new Promise((resolve,reject) =>{
        const query = "DELETE FROM kerkesa WHERE KerkesaId = ?";
        connection.query(query,[id],(err,results)=>{
        if (err) {
            return reject(err);
        }
        return resolve(results);
        });
    });
}

module.exports = requests;