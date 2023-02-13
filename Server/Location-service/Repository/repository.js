const mysql = require('mysql');
const connection = require('../Config/config.js');

let locations = {};

locations.all = search => {
  return new Promise((resolve, reject) => {
    if (search) {
      connection.query(
        `SELECT * from Lokacionet WHERE EmriObjektit LIKE '%${search}%'`,
        (err, results) => {
          if (err) {
            return reject(err);
          }
          return resolve(results);
        }
      );
    } else {
      connection.query(`SELECT * from Lokacionet `, (err, results) => {
        if (err) {
          return reject(err);
        }

        return resolve(results);
      });
    }
  });
};

locations.one = id => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * from Lokacionet WHERE LokacionetId = ? `,
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

locations.create = location => {
  return new Promise((resolve, reject) => {
    const query =
      'INSERT INTO Lokacionet (EmriObjektit,Rruga,NumriObjektit,KodiPostar) VALUES (?,?,?,?)';
    connection.query(
      query,
      [
        location.EmriObjektit,
        location.Rruga,
        location.NumriObjektit,
        location.KodiPostar,
      ],
      (err, result) => {
        if (err) {
          return reject(err);
        }
        return resolve(result);
      }
    );
  });
};

locations.delete = id => {
  return new Promise((resolve, reject) => {
    const query = 'DELETE FROM Lokacionet WHERE LokacionetId = ?';
    connection.query(query, [id], (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
};

locations.update = (id, location) => {
  return new Promise((resolve, reject) => {
    const query =
      'UPDATE Lokacionet SET EmriObjektit =?,Rruga =?,NumriObjektit =?,KodiPostar =?  WHERE LokacionetId = ?';
    connection.query(
      query,
      [location.emri, location.rruga, location.numri, location.kodipostar, id],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

module.exports = locations;
