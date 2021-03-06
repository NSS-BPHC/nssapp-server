import express from 'express';
require('dotenv').config();

const production = require('./startup/prod.js');

const app = express();
production(app);
const connectDB = require('./config/db.js');
require('./startup/routes')(app);

app.get('/ping', (req, res) => {
  res.send('pong');
});

const PORT = process.env.PORT || 3000;
connectDB();
app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));