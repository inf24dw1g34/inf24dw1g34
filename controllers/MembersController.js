"use strict";

var utils = require("../utils/writer.js");
var MembersController = require("../service/MembersControllerService");

module.exports.createMember = function createMember(req, res, next, body) {
    MembersController.createMember(body)
        .then(MembersController.retrieveMember)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.deleteMember = function deleteMember(req, res, next, id) {
    MembersController.deleteMember(id)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.retrieveMember = function retrieveMember(req, res, next, id) {
    MembersController.retrieveMember(id)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.retrieveMembers = function retrieveMembers(req, res, next) {
    MembersController.retrieveMembers()
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.updateMember = function updateMember(req, res, next, body, id) {
    MembersController.updateMember(body, id)
        .then(MembersController.retrieveMember)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};
