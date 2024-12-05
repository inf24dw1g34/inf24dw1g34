"use strict";

var sql = require("../utils/db.js");
/**
 * Add a new Member to the library
 *
 * body Member  (optional)
 * returns Member
 **/
exports.createMember = function (body) {
    return new Promise(function (resolve, reject) {
        console.log(body);
        const queryParams = [
            body.name,
            body.email,
            body.phone,
            body.address,
            body.registrationDate,
        ];
        sql.query(
            "INSERT INTO member (name, email, phone, address, registrationDate) VALUES (?, ?, ?, ?, ?)",
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
 * Delete Member
 *
 * id Integer
 * no response value expected for this operation
 **/
exports.deleteMember = function (id) {
    return new Promise(function (resolve, reject) {
        sql.query("DELETE FROM member WHERE id = ?", [id], function (err, res) {
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
 * Retrieve Member
 *
 * id Long
 * returns Member
 **/
exports.retrieveMember = function (id) {
    return new Promise(function (resolve, reject) {
        sql.query(
            "SELECT * FROM member WHERE id = ?",
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
 * Retrieve all Members
 *
 * returns List
 **/
exports.retrieveMembers = function () {
    return new Promise(function (resolve, reject) {
        sql.query("SELECT * FROM member", function (err, res) {
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
 * Update Member
 *
 * body Member
 * id Long
 * no response value expected for this operation
 **/
exports.updateMember = function (body, id) {
    return new Promise(function (resolve, reject) {
        console.log(body);
        const queryParams = [body.name, body.email, body.phone, body.address, body.registrationDate, id];
        sql.query(
            "UPDATE member SET name = ?, email = ?, phone = ?, address = ?, registrationDate = ? WHERE id = ?",
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
