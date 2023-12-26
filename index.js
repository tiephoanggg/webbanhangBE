
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const {connectDB} = require('./src/config/connectDB.js');
const userRouter = require('./src/routes/user.js')
const newsRouter = require('./src/routes/news.js')



const app = express();
const port = 3000;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectDB();












//router
app.use('/v4/user', userRouter);
app.use('/v4/news', newsRouter);

app.listen(port, () => {
  console.log(`Example app listening http://localhost:${port}`)
})