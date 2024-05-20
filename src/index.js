const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');


dotenv.config();

app.listen(3000, () => console.log('Server running......'));

