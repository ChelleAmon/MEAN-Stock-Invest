import express from "express";
import cors from "cors";
import path from "path";
import mongoose from "mongoose";
import axios from 'axios';
import { UserModel } from "./schemas/user.schema.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import { authHandler } from "./middleware/auth.middleware.js";
dotenv.config();
const access_token = process.env.ACCESS_TOKEN;
const saltRounds = 10;
const app = express();
const __dirname = path.resolve();
const PORT = process.env.PORT || 3000;
const clientPath = path.join(__dirname, '/dist/client');
app.use(express.static(clientPath));
console.log(`${process.env.MONGOURI}`);
mongoose.connect(
// 'mongodb://localhost:27017/Invest-Stocks',
`${process.env.MONGOURI}`)
    .then(() => console.log('DB connected successfully'))
    .catch((err) => console.log('Failed to connect to DB', err));
app.use(cors({
    credentials: true,
    origin: ['http://localhost:4200', 'http://localhost:3000', 'http://localhost:8080']
}));
app.use(express.json());
app.use(cookieParser());
app.get("/api/getTickers", async function (req, res, next) {
    try {
        let response = await axios.get('https://api.wazirx.com/api/v2/tickers');
        res.send(response.data);
    }
    catch (err) {
        next(err);
    }
});
app.get('/api/users', authHandler, function (req, res) {
    console.log("Logged in User", req.user);
    UserModel.find({ email: req.user.email }, '-password')
        .then(data => res.json({ data }))
        .catch(err => {
        res.status(501).json({ errors: err });
    });
});
app.post('/api/create-account', function (req, res) {
    const { firstName, lastName, email, password } = req.body;
    bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(password, salt, function (err, hash) {
            const user = new UserModel({
                firstName,
                lastName,
                email,
                password: hash,
            });
            user.save()
                .then(data => {
                res.json({ data });
            })
                .catch(err => {
                res.status(501).json({ errors: err });
            });
        });
    });
});
app.post('/api/user-login', function (req, res) {
    const { email, password } = req.body;
    UserModel.findOne({ email })
        .then(user => {
        bcrypt.compare(password, `${user?.password}`, function (err, result) {
            if (result) {
                console.log("password's matched!");
                const accessToken = jwt.sign({ user }, access_token);
                res.cookie('jwt', accessToken, {
                    httpOnly: true,
                    maxAge: 60 * 60 * 1000,
                });
                res.json({ data: user });
            }
            else {
                res.sendStatus(403);
                console.log('No email or password matched!');
            }
            ;
        });
    })
        .catch(err => {
        return res.sendStatus(404).json({ error: err });
    });
});
app.get('/api/checklogin', authHandler, function (req, res) {
    res.json({ message: 'yes' });
});
app.get('/api/user-logout', authHandler, function (req, res) {
    res.cookie('jwt', '', {
        httpOnly: true,
        maxAge: 60 * 60 * 1000,
    });
    res.json({ message: 'Successfully Logged Out!' });
});
app.get("/api/ordersHistory/:currency", async (req, res, next) => {
    try {
        let response = await axios.get('https://api.wazirx.com/api/v2/depth?market=' + req.params.currency);
        res.send(response.data);
    }
    catch (error) {
        next(error);
    }
});
app.get("/api/marketsHistory/:currency", async (req, res, next) => {
    try {
        let response = await axios.get('https://api.wazirx.com/api/v2/trades?market=' + req.params.currency);
        res.send(response.data);
    }
    catch (error) {
        next(error);
    }
});
app.get("/api/watchlist/:id", function (req, res) {
    UserModel.aggregate([
        // {$match:{_id: new mongoose.Types.ObjectId(req.body._id)}},
        { $match: { _id: req.body._id } },
        { $project: { watchList: 1, _id: 1 } },
        { $unwind: '$watchList' },
        // {$group: {
        //   _id: '$_id',
        //   items: {
        //     $addToSet: '$watchList'
        //   }
        //  }
        // }
    ]).then((data) => {
        console.log(data);
        res.json({ data });
    })
        .catch(err => {
        res.status(501).json({ errors: err });
    });
});
//   UserModel.findOne({user:req.body._id})
//   .populate({
//     path: 'user', 
//       populate: [
//         {path: 'watchList'}
//       ]
//   }
//   )
//   .then((data)=> {
//     console.log(data);
//     res.json({data})
//   })
//   .catch(err => {
//     res.status(501).json({errors: err})
//   })
// })
app.put("/api/addtowatch/:id/:cryptocode", async (req, res) => {
    let pushToArray = await UserModel.updateOne({ id: req.params.id }, { $push: { watchList: req.params.cryptocode } })
        .then(data => {
        console.log(data);
        res.json({ pushToArray });
    }).catch(error => {
        res.status(501).json({ errors: error });
    });
});
app.listen(PORT, function () {
    console.log(`running on http://localhost:${PORT}`);
});
app.all('/api/*', function (req, res) {
    res.sendStatus(404);
});
app.get("*", function (req, res) {
    const filePath = path.join(__dirname, '/dist/client/index.html');
    console.log(filePath);
    res.sendFile(filePath);
});
//# sourceMappingURL=server.js.map