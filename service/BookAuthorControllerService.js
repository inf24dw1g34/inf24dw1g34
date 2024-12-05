"use strict";

var sql = require("../utils/db.js");
/**
 * Add an Author to a specific Book
 *
 * body BookAuthor  (optional)
 * id Integer
 * returns BookAuthor
 **/
exports.createBookAuthor = function (body, id) {
    return new Promise(function (resolve, reject) {
        console.log(body);
        const queryParams = [id, body.idAuthor];
        sql.query(
            "INSERT INTO bookauthor (idBook, idAuthor) VALUES (?, ?)",
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
 * Remove an Author from a specific Book
 *
 * id Integer
 * idAuthor Integer
 * no response value expected for this operation
 **/
exports.deleteBookAuthor = function (id, idAuthor) {
    return new Promise(function (resolve, reject) {
        sql.query("DELETE FROM bookauthor WHERE idBook = ? AND idAuthor = ?", [id, idAuthor], function (err, res) {
            if (err || !res.affectedRows) {
                console.log(err);
                console.log(res);
                reject();
            } else {
                console.log(res);
                resolve({ deleted: [id, idAuthor] });
            }
        });
    });
};

/**
 * Retrieve Authors from a specific Book
 *
 * id Long
 * returns List
 **/
exports.retrieveBookAuthor = function (id) {
    return new Promise(function (resolve, reject) {
        let query =
            "SELECT nationality, name, a.id FROM author a INNER JOIN bookauthor ba ON ba.idAuthor = a.id WHERE ba.idBook = ?";
        sql.query(query, [id], function (err, res) {
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
