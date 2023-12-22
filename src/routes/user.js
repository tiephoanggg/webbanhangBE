const express = require('express');
const router = express.Router();

const { 
    test,
    login,
} = require('../controllers/UserController');



//newsController.index
router.get('/test', test);



module.exports = router;