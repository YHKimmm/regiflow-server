const client = require('../../elephantsql.js');
const queries = require('../queries/queries.js');

const retrieveUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const results = await client.query(queries.retrieveUser, [userId]);
        console.log('result', results.rows);
        res.json(results.rows);
    } catch (error) {
        console.log(`Error occurred while retrieving user data, ${error}`);
    }
}

module.exports = {
    retrieveUser
}