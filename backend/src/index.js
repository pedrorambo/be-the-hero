const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();
const {errors} = require('celebrate');

app.use(cors());
app.use(express.json());
app.use(errors());
app.use(routes);

app.listen(3333);
