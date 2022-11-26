
import mysql from 'mysql'
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import Routes from './route.js';

const app = express();
app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());





app.use('/', Routes);


const PORT = '8080';

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));