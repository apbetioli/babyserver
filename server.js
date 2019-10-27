const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(require('./routes.js'));

app.listen(process.env.PORT || 3001, () =>
  console.log('Express server is running on localhost:3001')
);