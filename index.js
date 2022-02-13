let mongoose =  require("mongoose")
const express = require('express')
const app = express();

app.use(express.json())
let http = require('http').Server(app)
var https = require('https')
let users = require("./model/user")

let DBURL = "mongodb+srv://roberto:474220Abc@cluster0.isirs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

function getError(e){
    if(e){
        
    let eArray = [];

    if(e.errors['username']){
        console.log(e.errors['username'].message)
        eArray.push('username');
    }
    if (e.errors['email']) {
        console.log(error.errors['email'].message)
        eArray.push('email');
    }
    if (e.errors['city']) {
        console.log(error.errors['city'].message)
        eArray.push('city');
    }
    if (e.errors['url']) {
        console.log(error.errors['url'].message)
        eArray.push('url');
    }
    if (e.errors['zip']) {
        console.log(error.errors['zip'].message)
        eArray.push('zip');
    }
    if (e.errors['phone']) {
        console.log(e.errors['phone'].message)
        eArray.push('phone');
    }
    return errorArray;

    } else {

    return 'No errors have been found.'
}

};

//users page
app.post('/users', function(req,res){
    let request = req.body;
    let prod = new users()

    prod.username = request.username
    prod.email = request.email
    prod.city = request.address.city
    prod.url = request.website
    prod.zip = request.address.zipcode
    prod.phone = request.phone
    //this checks and/or sends errors to the browser
    product.save(function (e) {
        let errors = getError(error)
        res.send(e)
    })
})

mongoose.connect(DBURL , { useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
    if (err) {
        console.log('mongodb has come accross an error, please check the console.',err);
    }else{
        console.log('MongoDB has connected successfully!');
    }
}); 

const PORT = process.env.PORT || 8080;

let server = http.listen(PORT, () => console.log(`The server is currently running on port: ${PORT}`));