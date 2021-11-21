import express from "express";
import cors from "cors";
import path from "path";
import mongoose from "mongoose";
import axios from 'axios';
import { UserModel } from "./schemas/user.schema.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import 'cookie-parser';
import dotenv from 'dotenv';
import { authHandler } from "./middleware/auth.middleware.js";
dotenv.config();
const access_token = process.env.ACCESS_TOKEN;
const saltRounds = 10;
const app = express();
const __dirname = path.resolve();
const PORT = 3000;
mongoose.connect('mongodb://localhost:27017/Invest-Stocks')
    .then(() => console.log('DB connected successfully'))
    .catch((err) => console.log('Failed to connect to DB', err));
app.use(cors({
    credentials: true,
    origin: ['http://localhost:4200', 'http://localhost:3000', 'http://localhost:8080']
}));
app.use(express.json());
app.get("/getTickers", async function (req, res, next) {
    try {
        let response = await axios.get('https://api.wazirx.com/api/v2/tickers');
        res.send(response.data);
    }
    catch (err) {
        next(err);
    }
});
app.get('/users', authHandler, function (req, res) {
    console.log("Logged in User", req.user);
    UserModel.find({ email: req.user.email }, '-password')
        .then(data => res.json({ data }))
        .catch(err => {
        res.status(501).json({ errors: err });
    });
});
app.post('/create-account', function (req, res) {
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
app.post('/user-login', function (req, res) {
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
app.get('/user-logout', authHandler, function (req, res) {
    res.cookie('jwt', '', {
        httpOnly: true,
        maxAge: 60 * 60 * 1000,
    });
    res.json({ message: 'Successfully Logged Out!' });
});
app.get("/ordersHistory/:currency", async (req, res, next) => {
    try {
        let response = await axios.get('https://api.wazirx.com/api/v2/depth?market=' + req.params.currency);
        res.send(response.data);
    }
    catch (error) {
        next(error);
    }
});
app.get("/marketsHistory/:currency", async (req, res, next) => {
    try {
        let response = await axios.get('https://api.wazirx.com/api/v2/trades?market=' + req.params.currency);
        res.send(response.data);
    }
    catch (error) {
        next(error);
    }
});
app.listen(PORT, function () {
    console.log(`running on http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map