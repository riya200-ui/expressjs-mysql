//const dbConfig = require("./config/db.config")
const express = require('express');
const app = express();


//middlware
app.use(express.json());



require('./config/db.config')
require('./config/connection')

require('./models/index') ;
require('./controllers/user')


/*const cors = require('cors');
var corsOptions = {
    origin:'http://localhost:8081'
}
app.use(cors(corsOptions));*/

const  bodyParser = require('body-parser');
//const urlencoded = require('body-parser/lib/types/urlencoded');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extends: true}));


//routes
const path = require('./routes/user');
app.use('/start',path)




app.get("/",(req,res) => {
    //res.send('app is start');
    res.status(200).json('app is start');
})


const port = process.env.PORT ||8080;
app.listen(port, ()=> {
    console.log(`server is listening on ${port}`)
})