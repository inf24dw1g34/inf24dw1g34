'use strict';

var utils = require('../utils/writer.js');
var BooksController = require('../service/BooksControllerService');

module.exports.createBook = function createBook (req, res, next, body) {
  BooksController.createBook(body)
    .then(BooksController.retrieveBook)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteBook = function deleteBook (req, res, next, id) {
  BooksController.deleteBook(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveBook = function retrieveBook (req, res, next, id) {
  BooksController.retrieveBook(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveBooks = function retrieveBooks (req, res, next, idGenre, idAuthor, available) {
  BooksController.retrieveBooks(idGenre, idAuthor, available)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateBook = function updateBook (req, res, next, body, id) {
  BooksController.updateBook(body, id)
    .then(BooksController.retrieveBook)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
