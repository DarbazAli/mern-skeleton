'use strict'
console.clear()

import mongoose from 'mongoose'

import app from './express.js'
import config from '../config/config.js'

/* ----------------------------------------------------------
    DB CONNECTION
------------------------------------------------------------- */
// let mongoose use global Promise Object
mongoose.Promise = global.Promise

mongoose
  .connect(config.mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log(`Mongodb Connected to server at ${config.mongoUri}`)
  })
  .catch((err) => {
    console.log(
      `Mongodb failted to connect at ${config.mongoUri}, Error: ${err}`
    )
  })

/* ----------------------------------------------------------
    LISTENING
------------------------------------------------------------- */
app.listen(config.port, (err) => {
  if (err) console.log(err)
  console.log(`Server is runnin on port ${config.port}`)
})
