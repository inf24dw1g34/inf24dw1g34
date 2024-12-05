"use strict";

var sql = require("../utils/db.js");
/**
 * Add a new book to the library
 *
 * body Book  (optional)
 * returns Book
 **/
exports.createBook = function (body) {
    return new Promise(function (resolve, reject) {
        console.log(body);
        const queryParams = [
            body.title,
            body.idGenre,
            body.publicationYear,
            body.isbn,
            body.pageCount,
            body.available,
        ];
        sql.query(
            "INSERT INTO book (title, idGenre, publicationYear, isbn, pageCount, available) VALUES (?, ?, ?, ?, ?, ?)",
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
 * Delete Book
 *
 * id Integer
 * no response value expected for this operation
 **/
exports.deleteBook = function (id) {
    return new Promise(function (resolve, reject) {
        sql.query(
            "DELETE FROM book WHERE id = ?",
            [id],
            function (err, res) {
                if (err || !res.affectedRows) {
                    console.log(err);
                    console.log(res);
                    reject();
                } else {
                    console.log(res);
                    resolve({ deleted: id });
                }
            }
        );
    });
};

/**
 * Retrieve Book
 *
 * id Long
 * returns Book
 **/
exports.retrieveBook = function (id) {
    return new Promise(function (resolve, reject) {
        sql.query("SELECT * FROM book WHERE id = ?", [id], function (err, res) {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                console.log(res);
                resolve(res[0]);
            }
        });
    });
};

/**
 * Retrieve all Books (includes Parameters)
 *
 * idGenre Integer  (optional)
 * idAuthor List  (optional)
 * available Boolean  (optional)
 * returns List
 **/
exports.retrieveBooks = function (idGenre, idAuthor, available) {
    return new Promise(function (resolve, reject) {
        let query = "SELECT * FROM book b ";
        const queryParams = [];

        if (idAuthor) query = "SELECT id, title, idGenre, publicationYear, isbn, pageCount, available, idAuthor FROM book b INNER JOIN bookauthor ba ON b.id = ba.idBook ";

        query += "WHERE 1 = 1";

        if (idAuthor) {
            query += " AND idAuthor IN (?) ";
            queryParams.push(idAuthor);
        }

        if (idGenre) {
            query += " AND idGenre = ?";
            queryParams.push(idGenre);
        }

        if (available !== undefined) {
            query += " AND available = ?";
            queryParams.push(available);
        }

        sql.query(query, queryParams, function (err, res) {
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
 * Update Book
 *
 * body Book
 * id Long
 * no response value expected for this operation
 **/
exports.updateBook = function (body, id) {
    return new Promise(function (resolve, reject) {
        console.log(body);
        const queryParams = [
            body.title,
            body.idGenre,
            body.publicationYear,
            body.isbn,
            body.pageCount,
            body.available,
            id
        ];
        sql.query(
            "UPDATE book SET title = ?, idGenre = ?, publicationYear = ?, isbn = ?, pageCount = ?, available = ? WHERE id = ?",
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
