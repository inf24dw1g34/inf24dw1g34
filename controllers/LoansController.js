"use strict";

var utils = require("../utils/writer.js");
var LoansController = require("../service/LoansControllerService");

module.exports.createLoan = function createLoan(req, res, next, body) {
    LoansController.createLoan(body)
        .then(LoansController.retrieveLoan)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.deleteLoan = function deleteLoan(req, res, next, id) {
    LoansController.deleteLoan(id)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.retrieveLoan = function retrieveLoan(req, res, next, id) {
    LoansController.retrieveLoan(id)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.retrieveLoans = function retrieveLoans(
    req,
    res,
    next,
    idMember,
    idBook,
    returned
) {
    LoansController.retrieveLoans(idMember, idBook, returned)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.updateLoan = function updateLoan(req, res, next, body, id) {
    LoansController.updateLoan(body, id)
        .then(LoansController.retrieveLoan)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};
