const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");

// User Routes
<<<<<<< HEAD
app.post('/signup', (req, res) => {
    // Implement user signup logic
});

app.get('/courses', (req, res) => {
    // Implement listing all courses logic
});

app.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
});

app.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});
=======
router.post('/signup', (req, res) => {
    // Implement user signup logic
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router
>>>>>>> 86bdc525b6a13a9b10f6a3babb28fcc538497275
