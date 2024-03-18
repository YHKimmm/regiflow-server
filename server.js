const express = require("express");
const userRoutes = require('./users/routes/routes.js');

const app = express();
const PORT = 8080;

app.use(express.json());
require('./elephantsql');

app.use('/api/user', userRoutes);

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});