require('dotenv').config()

const morgan = require('morgan')
const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts') //connect the workout routes

//express app created
const app = express()

//middleware 
app.use(express.json())

//morgan
app.use(morgan("dev"))

app.use(( req, res, next ) => {
  console.log(req.path, req.method)
  next()
})



//route handler
// app.get('/', (req, res) => {
//   res.json({mssg: 'Welcome to the app'})
// })

app.use('/api/workouts', workoutRoutes)

//connect to db
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(process.env.PORT, () => {
      console.log("Connected to db & listening on port", process.env.PORT);
    }))
  .catch(err => console.log(err));




