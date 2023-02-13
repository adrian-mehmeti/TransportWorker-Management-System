const mysql = require('mysql');
const connection = require('../Config/config.js');

let registers = {};

registers.all = () => {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * from regjistrimi `, (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
};

registers.one = id => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * from regjistrimi WHERE RegjistrimiId = ? `,
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

registers.create = register => {
  return new Promise((resolve, reject) => {
    const query =
      'INSERT INTO regjistrimi(Emri,Mbiemri,EmailPrivat,Email,Paswordi) VALUES (?,?,?,?,?);';
    connection.query(
      query,
      [
        register.Emri,
        register.Mbiemri,
        register.EmailPrivat,
        register.Email,
        register.Paswordi,
      ],
      (err, result) => {
        if (err) {
          return reject(err);
        }
        return resolve(register);
      }
    );
  });
};

registers.delete = id => {
  return new Promise((resolve, reject) => {
    const query = 'DELETE FROM Regjistrimi WHERE RegjistrimiId = ?';
    connection.query(query, [id], (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
};

registers.update = (id, temp) => {
  return new Promise((resolve, reject) => {
    const query =
      'UPDATE Regjistrimi SET Emri = ?,Mbiemri = ?,EmailPrivat =?, Email = ?,Paswordi = ?  WHERE RegjistrimiId = ?';
    connection.query(
      query,
      [temp.name, temp.surname, temp.emailPr, temp.email, temp.pass, id],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      }
    );
  });
};

registers.login = (email, pass) => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT Email,Paswordi FROM Regjistrimi Where Email = ?';
    connection.query(query, [email], (err, results) => {
      if (err) {
        return reject(err);
      }
      let em = results[0].Email;
      let p = results[0].Paswordi;
      if (em == email && p == pass) {
        return resolve('connect');
      } else {
        return resolve('-------Email or Password Incorrect-------');
      }
    });
  });
};

module.exports = registers;
