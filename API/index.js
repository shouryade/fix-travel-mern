const express = require('express')
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express()
const port = 3000

dotenv.config();


mongoose.connect(
    process.env.MONGODB
).then(()=>{
    console.log('Connected to the database');
}
    
).catch((e)=>{
    console.log('Error connecting to the database');
    console.log(e);
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!!`)
})