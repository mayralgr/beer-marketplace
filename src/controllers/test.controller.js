const { request } = require("express");

const test = async ( request, response ) => {

    return response.send('hello, testing').status(200);
}

module.exports = { test };