

const express = require('express');
const router = express.Router();

//const usersController = require('../app/controllers/usersController')

router.get('/',(req,res)=> {
    res.status(200).json('sucessfully routing');
   /* try{
    //res.send('route is start');
    res.status(200).json('sucessfully routing');
}catch{
    res.status(400).json(' not sucessfully routing');
}*/
});
module.exports = router ;

//if use const router then end like module.exorts=router
//start module.exports and {const}