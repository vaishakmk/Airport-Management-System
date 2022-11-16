import express from 'express';
import cors from  'cors';
import bodyParser from 'body-parser';
import util from 'util';
import winston from 'winston';
import pkg from 'winston';

const {format,transports} = pkg;



const port = process.env.PORT||5001;
const corsConfig = {
    credentials: true,
    origin: true,
  };
  
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  })






app.use((req,res,next)=>{
    res.status(200).json({message:"Hello World!!!"});
});


app.use((req,res,next)=>{
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
})

app.use((error,req,res,next)=>{
    res.status(error.status||500);
    res.json({
        error:{
            message : error.message
        }
    })
})



export const logger = winston.createLogger({
    transports:
        new transports.File({
        filename: 'logs/server.log',
        format:format.combine(
            format.timestamp({format: 'MMM-DD-YYYY HH:mm:ss'}),
            format.align(),
            format.printf(info => `${info.level}: ${[info.timestamp]}: ${info.message}`),
        )}),
    });
  
    

    
module.exports = app;

