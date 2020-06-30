/** @format */

const express = require('express');
const users = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
// importing User database model
const User = require('../models/User');
users.use(cors());
// setting secrect ket
process.env.SECRET_KEY = 'secret';

// req is request is got from client and response is our that we make against request.
//  if client request with /users/register and with post method
users.post('/register', (req, res) => {
    const today = new Date();
    // req is an object which is send by client
    // creating user object
    const userData = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        created: today,
    };
    // searching user by using email.
    User.findOne({
        email: req.body.email,
    })
        .then((user) => {
            // if user is not found
            if (!user) {
                // then we save user here.
                // hashing user password
                bcrypt.hash(userData.password, 10, (err, hash) => {
                    // if hash is complete
                    // adding hash data to user.password object attributes
                    userData.password = hash;
                    // createing new user object model
                    const user = new User(userData);
                    // saving user model object
                    user.save()
                        .then((user) => {
                            // sending response client that register success msg to user.
                            res.json({ status: user.email + 'Registered!' });
                        })
                        .catch((err) => {
                            // send response client error message.
                            res.send('error: ' + err);
                        });
                });
            } else {
                // if user is existed then error msg is sent to client as a response
                res.json({ error: 'User already exists' });
            }
        })
        .catch((err) => {
            // send response to client if searching is failed.
            res.send('error: ' + err);
        });
});
// if client request with /user/login with post method
users.post('/login', (req, res) => {
    // console.log(req.body.email, req.body.password);
    // req is an object send by client with body attributes

    // searching user in database using email
    User.findOne({
        email: req.body.email,
    })
        .then((user) => {
            // if user is found
            if (user) {
                // then  password provided by client and password in database is compared
                if (bcrypt.compareSync(req.body.password, user.password)) {
                    // Passwords match
                    // creating payload object
                    const payload = {
                        _id: user._id,
                        first_name: user.first_name,
                        last_name: user.last_name,
                        email: user.email,
                        Usertype: user.Usertype,
                    };
                    // creating token
                    let token = jwt.sign(payload, process.env.SECRET_KEY);
                    // sending response as a token to client
                    res.send(token);
                } else {
                    // Passwords don't match
                    res.json({ error: 'User does not exist' });
                }
            } else {
                // user doesn't exist while searching
                res.json({ error: 'User does not exist' });
            }
        })
        .catch((err) => {
            // if error occured then send error
            res.send('error: ' + err);
        });
});

// if client request with /user/profile with get method below function is excuted
users.get('/profile', (req, res) => {
    //  decoding jwt toke send by client in req object
    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY);
    // searching user with user id
    User.findOne({
        _id: decoded._id,
    })
        .then((user) => {
            // if user found
            if (user) {
                // sending  user profile data as a response to client.
                res.json(user);
            } else {
                res.send('User does not exist');
            }
        })
        .catch((err) => {
            res.send('error: ' + err);
        });
});
// exporting users route
module.exports = users;
