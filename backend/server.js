const express = require('express');
const dbConnect = require('./config/dbConnect');
const apiRoutes = require('./routes/api');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

dbConnect();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', apiRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
