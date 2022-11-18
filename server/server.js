const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT||5001;

app.use(cors());
app.use(express.json());


const uri = process.env.ATLAS_URI;
mongoose.connect(
    `mongodb+srv://ams_202:ams_202@cluster0.75rthbh.mongodb.net/?retryWrites=true&w=majority`, 
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  );


const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("MongoDB Connected successfully. Phew...");
});



const airlinesRoutes = require('./routes/airlines');
const flightsRoutes = require('./routes/flights');
const airline_employeeRoutes = require('./routes/airline_employee');
const userRoutes = require('./routes/users');



app.use('/airlines', airlinesRoutes);
app.use('/flights',flightsRoutes);
app.use('/airline_employee',airline_employeeRoutes);
app.use('/',userRoutes);



app.listen(port,()=>{
    console.log(`Server is runnning on ${port}`);
});
