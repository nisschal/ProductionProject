/** @format */

const express = require('express');
const course = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const Courses = require('../models/Courses');
course.use(cors());

process.env.SECRET_KEY = 'secret';
// req is request is got from client and response is our that we make against request.

// user request /courses/add with post method below function is executed
course.post('/add', (req, res) => {
    // creating object of course
    const courseData = {
        title: req.body.title,
        url: req.body.url,
        description: req.body.description,
        category: req.body.category,
    };
    console.log(courseData);
    // function to find course with course title
    Courses.findOne({
        title: req.body.title,
    })
        .exec()
        .then((course) => {
            // if course is not exist
            if (!course) {
                // then created course
                Courses.create(courseData)
                    .then((course) => {
                        res.json({ status: course.title + 'Recorded!' });
                    })
                    .catch((err) => {
                        // send error while creating course in database
                        res.send('error: ' + err);
                    });
            } else {
                // if course is existed then send 409 status code and error msg
                res.status(409).json({ error: 'Course Title Already Taken' });
            }
        })
        .catch((err) => {
            res.send('error: ' + err);
        });
});
// if client request with /courses/all below function is executed
course.get('/all', (req, res) => {
    // function to get all courses
    Courses.find()
        .exec()
        .then((allCourse) => {
            // console.log('all', allCourse);
            // if course found
            if (allCourse) {
                // return response with courses and msg
                res.json({ courses: allCourse, message: ' Fetch Courses Success' });
            } else {
                // return response with msg
                res.send({ messgae: 'Empty Course' });
            }
        })
        .catch((err) => {
            // send error if error found when finding courses
            res.send('error: ' + err);
        });
});

// if client request /course/12312 where 12312 is data id with get method then below function executed.
course.get('/:id', (req, res) => {
    // var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY);
    // get course by id
    console.log(req.params.id);
    Courses.find({ _id: req.params.id })
        .then((course) => {
            // if course found
            if (course) {
                // then send response with  course data to client
                console.log('got course:', course);
                res.send(course[0]);
            } else {
                // otherwise send msg
                res.send({ messgae: 'Empty Course' });
            }
        })
        .catch((err) => {
            // send error if find function failed
            res.send('error: ' + err);
        });
});
// exporting course route
module.exports = course;
