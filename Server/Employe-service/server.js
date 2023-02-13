const express = require('express');
const apiRouter = require('./Routes/employes');
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express();
app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

app.use(express.json());

app.use('/',apiRouter);

app.listen(process.env.PORT|| '3001',()=>{
    console.log(`Server is runing on port: ${process.env.PORT || '3001'}`);
});