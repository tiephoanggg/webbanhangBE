
const express = require('express');
const {connectDB} = require('./src/config/connectDB.js');
const userRouter = require('./src/routes/user.js')



const app = express();
const port = 3000;

connectDB();



//router
app.use('/v4/user', userRouter);





app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening http://localhost:${port}`)
})