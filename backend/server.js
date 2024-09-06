require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts') //connect the workout routes

//express app created
const app = express()

//middleware 
app.use(express.json())

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
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));




