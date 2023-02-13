const mysql = require('mysql');
const axios = require('axios');
const connection = require('../Config/config.js');

let dailyagendas = {};

dailyagendas.all = () => {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * from agjendaditore `, (err, results) => {
      if (err) {
        return reject(err);
      }
      let rowsAgenda = [];

      for (let i = 0; i < results.length; i++) {
        let person = new Object();
        let puntoriId = results[i].PuntoriId;
        let MjetiId = results[i].MjetetId;
        let ProduktiId = results[i].ProduktiId;
        let LokacionetId = results[i].LokacionetId;

        axios
          .all([
            axios.get('http://localhost:3001/employe/' + puntoriId),
            axios.get('http://localhost:3002/trucktransport/' + MjetiId),
            axios.get('http://localhost:3003/location/' + ProduktiId),
            axios.get('http://localhost:3004/product/' + LokacionetId),
          ])
          .then(
            axios.spread(
              (
                employeResponse,
                truckResponse,
                locationResponse,
                productResponse
              ) => {
                person.emri = employeResponse.data.Emri;
                person.mbiemri = employeResponse.data.Mbiemri;
                person.modeli = truckResponse.data.Modeli;
                person.tipi = truckResponse.data.Tipi;
                person.objekti = locationResponse.data.EmriObjektit;
                person.produkti = productResponse.data.EmriProduktit;
                rowsAgenda.push(person);
                if (rowsAgenda.length == results.length) {
                  resolve(rowsAgenda);
                }
              }
            )
          );
      }
    });
  });
};

module.exports = dailyagendas;
