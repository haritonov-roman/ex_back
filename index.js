const express = require('express');
const app = express();
const port = 3000;

const userRouter = require('./routes/user.routes');

app.use('/api', userRouter);

app.listen(port, () => {
  console.log(`Example app listerning on port ${port}`);
});
