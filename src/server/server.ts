import express from "express";
import cors from "cors";
import path from "path";
import mongoose from "mongoose";

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

app.listen(PORT, function() {
  console.log(`running on http://localhost:${PORT}`)
}) 


