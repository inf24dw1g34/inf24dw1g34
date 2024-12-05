"use strict";

var utils = require("../utils/writer.js");
var GenresController = require("../service/GenresControllerService");

module.exports.createGenre = function createGenre(req, res, next, body) {
    GenresController.createGenre(body)
        .then(GenresController.retrieveGenre)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.deleteGenre = function deleteGenre(req, res, next, id) {
    GenresController.deleteGenre(id)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.retrieveGenre = function retrieveGenre(req, res, next, id) {
    GenresController.retrieveGenre(id)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.retrieveGenres = function retrieveGenres(req, res, next) {
    GenresController.retrieveGenres()
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.updateGenre = function updateGenre(req, res, next, body, id) {
    GenresController.updateGenre(body, id)
        .then(GenresController.retrieveGenre)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};
