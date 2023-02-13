const express = require('express');
const apiRouter = require('./Routes/agendas');
const cors = require('cors')
const morgan = require('morgan')



const app = express();
app.use(morgan('combine'))
app.use(cors())
app.use(express.json());

app.use('/',apiRouter);



app.listen(process.env.PORT|| '3006',()=>{
    console.log(`Server is runing on port: ${process.env.PORT || '3006'}`);
});