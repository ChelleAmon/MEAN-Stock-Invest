import express from "express";
import cors from "cors";
import path from "path";
import mongoose from "mongoose";
import { UserModel } from "./schemas/user.schema.js";

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/Invest-Stocks')
  .then(()=> console.log('DB connected successfully'))
  .catch((err) => console.log('Failed to connect to DB', err))


app.use(cors());
app.use(express.json());


app.get('/', function(req, res) {
  console.log('app')
  res.json({test: 'tes2'})
});

app.get('/api/users', function(req: any,res){
  UserModel.find({ email: req.user.email}, '-password')
  .then(data => res.json({data}))
  .catch(err => {
    res.status(501).json({errors: err})
  })
});

app.post('/api/create-account', function(req, res){
  const{firstName, lastName, email, password} = req.body;
  
  const user = new UserModel({
    firstName,
    lastName,
    email,
    password,
  });

  user.save()
    .then(data => {
      res.json({data});
    })
    .catch(err => {
      res.status(501).json({errors:err})
    })
});





app.listen(PORT, function() {
  console.log(`running on http://localhost:${PORT}`)
}) 


