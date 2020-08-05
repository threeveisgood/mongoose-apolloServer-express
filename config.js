const mongoose = require('mongoose')

const url = 'mongodb+srv://manu:ihaEWTL4xoNuiDuD@cluster0-eripl.mongodb.net/post?retryWrites=true&w=majority'

mongoose.connect(
    url,
    { useNewUrlParser: true, useUnifiedTopology: true }
  ).then(() => {
      console.log('Connected to Database!')
  }).catch(() => {
      console.log('Connection failed!')
  })

  //mongoose.connection.once('open', () => console.log(`Connected to mongo at ${url}`));