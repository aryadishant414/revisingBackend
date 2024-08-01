// console.log("Hello from Dishant and Node");
// require('dotenv').config()
// const express = require('express')

// import 'dotenv/config'
// import express from 'express'

// const app = express()
// const port = 3000 || process.env.PORT
// // console.log("OUR Envi : ", process.env)

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.get('/login', (req,res) => {
//   res.send("Login Successfull")
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })


import app from "./app.js"
import dotenv from "dotenv"
import 'dotenv/config'
dotenv.config({
  path: './.env'
})


connectDB()
  .then( () => {
    app.on("error", (error) => {
      console.log("App communication failed" , error);
      throw error
    }) // upper app.on ke just aage double quotes mai jo error likha hai ("error") is just a name of the event jisko hamm listen krna chahte hai. callback function ke andar jo error likha hai uske pass saari details hai about the actual error ki kya problem aagyi hai

    app.listen(process.env.PORT || 8000 , () => {
      console.log(`Server Started here and App Listens on PORT : ${process.env.PORT}`);
  })

  })

  .catch((error) => {
    console.log("MongoDb is Not connected successfully " , error);
    throw error
  })



  /*
(async () => {
  // IIFE code block

  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

    app.on("errorrr" , (error) => {
      console.log("Error in Express App" , error);
      throw error
  })

    app.listen(process.env.PORT , () => {
      console.log(`App is listening on port : ${process.env.PORT}`);
  })

  } catch (error) {
    console.error("ERRROR : " , error);  // `console.log` krte `console.error` too bhi mtlb same hee tha
    throw err
  }

})();
*/