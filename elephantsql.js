const pg = require("pg");
require("dotenv").config();

const conString = process.env.DATABASE_URL;
const client = new pg.Client(conString);

client.connect(function (error) {
    if (error) {
        return console.error("Error occurred while connecting database", error);
    }
});

module.exports = client;