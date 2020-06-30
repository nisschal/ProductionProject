/** @format */
// importing all the requried libraries.
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcrypt');
// setting port
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
app.use(
    bodyParser.urlencoded({
        extended: false,
    })
);
// define MongoURI
const mongoURI = 'mongodb://localhost/EduLern';
// connecting Database
mongoose
    .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        // finding any admin user
        User.findOne({ Usertype: 'admin' })
            .exec()
            .then((user) => {
                // after finding if user is not exist
                if (!user) {
                    // create new admin user
                    // hasing password = admin
                    bcrypt.hash('admin', 10, (err, hash) => {
                        const today = new Date();
                        // creating user Object
                        const user = new User({
                            first_name: 'root',
                            last_name: 'root',
                            email: 'root@root.com',
                            password: hash,
                            created: today,
                            Usertype: 'admin',
                        });
                        // saving User object
                        user.save()
                            .then(() => {
                                console.log('root user created');
                            })
                            .catch((err) => {
                                console.log('error', err);
                            });
                    });
                }
            })
            .catch((err) => {
                console.log('err', err);
            });

        return console.log('MongoDB Connected');
    })
    .catch((err) => console.log(err));
const Users = require('./routes/Users');
const Courses = require('./routes/Courses');
// if client uses /users url while calling server it redirects Users Function of 'routes/Users dir.
app.use('/users', Users);
// if client uses /courses url while calling server it redirects Courses Function of 'routes/courses dir.
app.use('/courses', Courses);

// running server in given port
app.listen(port, function () {
    console.log('Server is running on port: ' + port);
});
