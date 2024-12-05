"use strict";

var sql = require("../utils/db.js");
/**
 * Add a new Loan to the library
 *
 * body Loan  (optional)
 * returns Loan
 **/
exports.createLoan = function (body) {
    return new Promise(function (resolve, reject) {
        console.log(body);
        const queryParams = [
            body.idBook,
            body.idMember,
            body.loanDate,
            body.expectedReturnDate,
            body.returnDate,
        ];
        sql.query(
            "INSERT INTO loan (idBook, idMember, loanDate, expectedReturnDate, returnDate) VALUES (?, ?, ?, ?, ?)",
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
 * Delete Loan
 *
 * id Integer
 * no response value expected for this operation
 **/
exports.deleteLoan = function (id) {
    return new Promise(function (resolve, reject) {
        sql.query("DELETE FROM loan WHERE id = ?", [id], function (err, res) {
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
 * Retrieve Loan
 *
 * id Long
 * returns Loan
 **/
exports.retrieveLoan = function (id) {
    return new Promise(function (resolve, reject) {
        sql.query("SELECT * FROM loan WHERE id = ?", [id], function (err, res) {
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
 * Retrieve all Loans (includes Parameters)
 *
 * idMember Integer  (optional)
 * idBook Integer  (optional)
 * returned Boolean  (optional)
 * returns List
 **/
exports.retrieveLoans = function (idMember, idBook, returned) {
    return new Promise(function (resolve, reject) {
        let query = "SELECT * FROM loan WHERE 1 = 1";
        const queryParams = [];

        if (idMember) {
            query += " AND idMember = ?";
            queryParams.push(idMember);
        }

        if (idBook) {
            query += " AND idBook = ?";
            queryParams.push(idBook);
        }

        if (returned !== undefined) {
            if (returned === true || returned === "true")
                query += " AND returnDate IS NOT NULL";
            else if (returned === false || returned === "false")
                query += " AND returnDate IS NULL";
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
 * Update Loan
 *
 * body Loan
 * id Long
 * no response value expected for this operation
 **/
exports.updateLoan = function (body, id) {
    return new Promise(function (resolve, reject) {
        console.log(body);
        const queryParams = [
            body.idBook,
            body.idMember,
            body.loanDate,
            body.expectedReturnDate,
            body.returnDate,
            id,
        ];
        sql.query(
            "UPDATE loan SET idBook = ?, idMember = ?, loanDate = ?, expectedReturnDate = ?, returnDate = ? WHERE id = ?",
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
