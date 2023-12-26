//import mongoose
const mongoose = require('mongoose');
const { Schema } = mongoose;

const newsSchema = new Schema ({
    newsname :{
        type: String,
        require: true,
        unique: true,
    },
    content: {
        type: String,
        require: true,
        unique: true,
    },
}, {timestamps: true })
const News = mongoose.model('News', newsSchema);
module.exports = News;