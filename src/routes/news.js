const express = require('express');
const router = express.Router();

const { 
  fetchNews,
  createNews
} = require('../controllers/NewsController');



//newsController.index
router.get('/fetchNews', fetchNews);
router.post('/createNews', createNews);

module.exports = router;