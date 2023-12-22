const express = require('express');
const router = express.Router();

const userController = require('../controllers/UserController');

//newsController.index
router.get('/test', ()=> {
    console.log('tooi test phần user')
})



module.exports = router;