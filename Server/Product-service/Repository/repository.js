const mysql = require('mysql');
const connection = require('../Config/config.js');

let products = {};

products.all = search => {
  return new Promise((resolve, reject) => {
    if (search) {
      connection.query(
        `SELECT * from Produkti WHERE EmriProduktit LIKE '%${search}%'`,
        (err, results) => {
          if (err) {
            return reject(err);
          }
          return resolve(results);
        }
      );
    } else {
      connection.query(`SELECT * from Produkti `, (err, results) => {
        if (err) {
          return reject(err);
        }

        return resolve(results);
      });
    }
  });
};

products.one = id => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * from Produkti WHERE ProduktiId = ? `,
      [id],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results[0]);
      }
    );
  });
};

products.create = product => {
  return new Promise((resolve, reject) => {
    const query =
      'INSERT INTO Produkti (EmriProduktit,LlojiProduktit,Sasia) VALUES (?,?,?);';
    connection.query(
      query,
      [product.EmriProduktit, product.LlojiProduktit, product.Sasia],
      (err, result) => {
        if (err) {
          return reject(err);
        }
        return resolve(product);
      }
    );
  });
};

products.delete = id => {
  return new Promise((resolve, reject) => {
    const query = 'DELETE FROM Produkti WHERE ProduktiId = ?';
    connection.query(query, [id], (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
};

products.update = (id, product) => {
  return new Promise((resolve, reject) => {
    const query =
      'UPDATE Produkti SET EmriProduktit=?,LlojiProduktit=?,Sasia=?  WHERE ProduktiId = ?';
    connection.query(
      query,
      [product.emri, product.lloji, product.sasia, id],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

module.exports = products;
