const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const {Admin,Course} =require('../db/index')
const router = Router();

// Admin Routes
<<<<<<< HEAD
<<<<<<< HEAD
app.post('/signup', (req, res) => {
    // Implement admin signup logic
=======
router.post('/signup', async(req, res) => {
    try {
        const { username, password } = req.body;
        const newAdmin = new Admin({ username, password });
        await newAdmin.save();
        res.status(200).json({ message: 'Admin created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
>>>>>>> parent of d07fd92 (week 3 push)
});

router.post('/courses', adminMiddleware, async(req, res) => {
    try {
        const { title, description, price, imageLink } = req.body;
        const newCourse = new Course({ title, description, price, imageLink });
        await newCourse.save();
        res.status(200).json({ message: 'Course saved successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

<<<<<<< HEAD
app.get('/courses', adminMiddleware, (req, res) => {
=======
router.post('/signup', (req, res) => {
    // Implement admin signup logic
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
>>>>>>> 86bdc525b6a13a9b10f6a3babb28fcc538497275
    // Implement fetching all courses logic
=======
router.get('/courses', adminMiddleware, async(req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json({ courses });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
>>>>>>> parent of d07fd92 (week 3 push)
});

module.exports = router;