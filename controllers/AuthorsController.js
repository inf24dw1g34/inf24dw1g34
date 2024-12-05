'use strict';

var utils = require('../utils/writer.js');
var AuthorsController = require('../service/AuthorsControllerService');

module.exports.createAuthor = function createAuthor (req, res, next, body) {
  AuthorsController.createAuthor(body)
    .then(AuthorsController.retrieveAuthor)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteAuthor = function deleteAuthor (req, res, next, id) {
  AuthorsController.deleteAuthor(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveAuthor = function retrieveAuthor (req, res, next, id) {
  AuthorsController.retrieveAuthor(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveAuthors = function retrieveAuthors (req, res, next) {
  AuthorsController.retrieveAuthors()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateAuthor = function updateAuthor (req, res, next, body, id) {
  AuthorsController.updateAuthor(body, id)
    .then(AuthorsController.retrieveAuthor)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
