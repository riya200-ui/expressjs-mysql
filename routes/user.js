module.exports= app => {

const express = require('express');
const router = express.Router();

router.get('./',(req,res)=> {
    //res.send('route is start');
    res.status(200).json('sucessfully routing');
});

}
//if use const router then end like module.exorts=router
//start module.exports and {const}