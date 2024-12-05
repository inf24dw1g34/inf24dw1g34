"use strict";

var sql = require("../utils/db.js");
/**
 * Add a new Genre to the library
 *
 * body Genre  (optional)
 * returns Genre
 **/
exports.createGenre = function (body) {
    return new Promise(function (resolve, reject) {
        console.log(body);
        sql.query(
            "INSERT INTO genre (name) VALUES (?)",
            body.name,
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
 * Delete Genre
 *
 * id Integer
 * no response value expected for this operation
 **/
exports.deleteGenre = function (id) {
    return new Promise(function (resolve, reject) {
        sql.query("DELETE FROM genre WHERE id = ?", [id], function (err, res) {
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
 * Retrieve Genre
 *
 * id Long
 * returns Genre
 **/
exports.retrieveGenre = function (id) {
    return new Promise(function (resolve, reject) {
        sql.query(
            "SELECT * FROM genre WHERE id = ?",
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
 * Retrieve all Genres
 *
 * returns List
 **/
exports.retrieveGenres = function () {
    return new Promise(function (resolve, reject) {
        sql.query("SELECT * FROM genre", function (err, res) {
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
 * Update Genre
 *
 * body Genre
 * id Long
 * no response value expected for this operation
 **/
exports.updateGenre = function (body, id) {
    return new Promise(function (resolve, reject) {
        console.log(body);
        const queryParams = [body.name, id];
        sql.query(
            "UPDATE genre SET name = ? WHERE id = ?",
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
