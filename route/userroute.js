const express = require('express')
const userModelling = require('./model/user')
const app = express();

app.post('/', async(req,res)=>{
    const user = new userModelling(req.body)
    try{
        await user.save((err) =>{
            if(err){
                res.status(500).send({error: err.toString()})
            } else {
                res.send(user)
            }
        })
    } catch (err){
        //500 status = internal server error
        res.status(500).send({error: err.toString()})
    }
})
module.exports = app