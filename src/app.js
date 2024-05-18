const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bnsRoutes = require('./routes/bnsRoutes');
const errorHandler = require('./middleware/errorHandler');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/bns', bnsRoutes);
app.use(errorHandler);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).then(() => {
  console.log('Connected to MongoDB');
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}).catch(err => {
  console.error('MongoDB connection error:', err);
});
