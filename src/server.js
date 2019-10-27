const express = require('express');
const cors = require('cors');
const morgan = require('morgan')

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(require('./app/controllers/pingController'));
app.use("/api", require('./app/controllers/contactController'));
app.use(morgan('dev'));

app.listen(process.env.PORT || 3001, () =>
  console.log('Express server is running on localhost:3001')
);
