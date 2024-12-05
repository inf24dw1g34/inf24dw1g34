"use strict";

var sql = require("../utils/db.js");

/**
 * Add a new Author to the library
 *
 * body Member  (optional)
 * returns Member
 **/

exports.createAuthor = function (body) {
    return new Promise(function (resolve, reject) {
        console.log(body);
        const queryParams = [body.name, body.nationality];
        sql.query(
            "INSERT INTO author (name, nationality) VALUES (?, ?)",
            queryParams,
            function (err, res) {
                if (err) {
                    console.log(err);
                    reject(err);
                } else {
                    console.log(res.insertId);
                    resolve(res.insertId);
                }
            }
        );
    });
};

/**
 * Delete Author
 *
 * id Integer
 * no response value expected for this operation
 **/
exports.deleteAuthor = function (id) {
    return new Promise(function (resolve, reject) {
        sql.query("DELETE FROM author WHERE id = ?", [id], function (err, res) {
            if (err || !res.affectedRows) {
                console.log(err);
                console.log(res);
                reject();
            } else {
                console.log(res);
                resolve({ deleted: id });
            }
        });
    });
};

/**
 * Retrieve Author
 *
 * id Long
 * returns Author
 **/
exports.retrieveAuthor = function (id) {
    return new Promise(function (resolve, reject) {
        sql.query(
            "SELECT * FROM author WHERE id = ?",
            [id],
            function (err, res) {
                if (err) {
                    console.log(err);
                    reject(err);
                } else {
                    console.log(res);
                    resolve(res[0]);
                }
            }
        );
    });
};

/**
 * Retrieve all Authors
 *
 * returns List
 **/
exports.retrieveAuthors = function () {
    return new Promise(function (resolve, reject) {
        sql.query("SELECT * FROM author", function (err, res) {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                console.log(res);
                resolve(res);
            }
        });
    });
};

/**
 * Update Author
 *
 * body Author
 * id Long
 * no response value expected for this operation
 **/
exports.updateAuthor = function (body, id) {
    return new Promise(function (resolve, reject) {
      console.log(body);
      const queryParams = [
          body.name,
          body.nationality,
          id  
      ];
      sql.query(
          "UPDATE author SET name = ?, nationality = ? WHERE id = ?",
          queryParams,
          function (err, res) {
              if (err) {
                  console.log(err);
                  reject(err);
              } else {
                  console.log(res);
                  resolve(id);
              }
          }
      );
    });
};
