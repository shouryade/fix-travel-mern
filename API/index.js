const express = require('express')
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRouter = require('./routes/user_routes');
const authRouter = require('./routes/authRoutes');
const app = express()
const port = 3000

dotenv.config();

app.use(express.json());

mongoose.connect(
    process.env.MONGODB
).then(()=>{
    console.log('Connected to the database');
}
    
).catch((e)=>{
    console.log('Error connecting to the database');
    console.log(e);
})

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}!!`)
})