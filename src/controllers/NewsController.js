const { restart } = require('nodemon');
const News = require('../models/News');
const asyncHandler = require('express-async-handler');
const mongoose = require('mongoose');


const fetchNews = asyncHandler(async (req, res) => {
    try {

        console.log('test 22222')
        res.json(
            {
                "content": "Hoang Tiep",
                "zzzz": 23
            }
        )

        
    } catch (error) {
        console.log(error);
    }

});
const createNews = asyncHandler(async (req, res) => {
    const { newsname, content } = req.body;
    console.log(req.body);
    try {
        
        const news = await News.create({
            _id: new mongoose.Types.ObjectId(),
            newsname,
            content
        });

        if (news) {
            res.json({
                message: "Success",
                data: {
                    _id: news._id,
                    newsname:news.newsname,
                    content: news.content

                }
            })
            
        } else {
            res.json({
                message: "Error",
            })
            
        }

    } catch (error) {
        console.log(error);
        res.json({
            message: "Error",
        })
    }

});



module.exports = {
    fetchNews,
    createNews
}
