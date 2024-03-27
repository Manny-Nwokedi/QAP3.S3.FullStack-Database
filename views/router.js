const express = require('express');
const router = express.Router();

// Define routes
router.get('/', (req, res) => {
    res.send('Welcome to the Glassdoor API');
});

// Export the router
module.exports = router;