'use strict';

var utils = require('../utils/writer.js');
var BookAuthorController = require('../service/BookAuthorControllerService');

module.exports.createBookAuthor = function createBookAuthor (req, res, next, body, id) {
  BookAuthorController.createBookAuthor(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteBookAuthor = function deleteBookAuthor (req, res, next, id, idAuthor) {
  BookAuthorController.deleteBookAuthor(id, idAuthor)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveBookAuthor = function retrieveBookAuthor (req, res, next, id) {
  BookAuthorController.retrieveBookAuthor(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
