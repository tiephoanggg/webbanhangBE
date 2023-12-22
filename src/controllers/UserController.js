const User = require('../models/User');
const asyncHandler = require('express-async-handler');



const test = asyncHandler(async (req, res) => {
    try {

        console.log('test 22222')
        res.json(
            {
                "name": "Hoang Tiep",
                "age": 23
            }
        )

        
    } catch (error) {
        console.log(error);
    }

});

const login = asyncHandler(async (req, res) => {


});

module.exports = {
    test,
    login
}
