const express = require('express')
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRouter = require('./routes/user_routes');
const authRouter = require('./routes/authRoutes');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 3000
const cleanupUnverifiedUsers = require('./Utils/cleanupUnverifiedUsers'); 
const formRoutes = require('./routes/formSubmit');
dotenv.config();

app.use(express.json());


//cors middleware
app.use(cors({
    origin: 'http://localhost:5173' // Replace with your front-end URL
  }));



mongoose.connect(
    process.env.MONGODB
).then(()=>{
    console.log('Connected to the database');
    cleanupUnverifiedUsers();
}
    
).catch((e)=>{
    console.log('Error connecting to the database');
    console.log(e);
})


app.use('/', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/forms', formRoutes);





app.listen(port, () => {
  console.log(`Example app listening on port ${port}!!`)
})