const member = require('../db');
const { Op } = require('sequelize');

async function postaddmember(params) {
    return member.create(params);
}

module.exports = {
    postaddmember
}