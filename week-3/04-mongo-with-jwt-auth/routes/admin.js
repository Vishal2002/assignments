const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();

// Admin Routes
<<<<<<< HEAD
app.post('/signup', (req, res) => {
    // Implement admin signup logic
});

app.post('/signin', (req, res) => {
    // Implement admin signup logic
});

app.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

app.get('/courses', adminMiddleware, (req, res) => {
=======
router.post('/signup', (req, res) => {
    // Implement admin signup logic
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
>>>>>>> 86bdc525b6a13a9b10f6a3babb28fcc538497275
    // Implement fetching all courses logic
});

module.exports = router;