require('dotenv').config()

const express = require('express')

//express app created
const app = express()
const workoutRoutes = require('./routes/workouts') //connect the workout routes

app.use(( req, res, next ) => {
  console.log(req.path, req.method)
  next()
})

//route handler
// app.get('/', (req, res) => {
//   res.json({mssg: 'Welcome to the app'})
// })

app.use('/api/workouts', workoutRoutes)


//listen for request to port number 
app.listen(process.env.PORT, () => {
  console.log('listening on port 4000')
})

