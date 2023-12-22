const mongoose = require('mongoose');

 const connectDB = async () => {
  try {
    mongoose.set('strictQuery', false);
    const condb = await mongoose.connect('mongodb+srv://hoangxuantiep2001:jvemind2k10506@doandeploy.8dizmwc.mongodb.net/webbanhang?retryWrites=true&w=majority', {
      /* useNewUrlParser: true,
      useUnifiedTopology: true, */
    });
    console.log('Connect to MongoDB successfully');
  } catch (error) {
    console.log(`Errorxxxx : ${error.message}`);
    process.exit(1);
  }
};


module.exports = { connectDB };
