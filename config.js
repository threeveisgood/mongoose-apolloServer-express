const mongoose = require('mongoose')
require('dotenv').config();

const url = process.env.DB_URL

mongoose.connect(
    url,
    { useNewUrlParser: true, useUnifiedTopology: true }
  ).then(() => {
      console.log('Connected to Database!')
  }).catch(() => {
      console.log('Connection failed!')
  })

  //mongoose.connection.once('open', () => console.log(`Connected to mongo at ${url}`));
