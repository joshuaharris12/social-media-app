import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import postsRouter from './routes/postsRouter.js';

const PORT = 8000;
const URI = "mongodb://localhost:27017/test";
const app = express();
app.use(express.json());
app.use(cors());

app.use("/posts", postsRouter);


mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server listening on port ${PORT}`)))
    .catch(error => console.log(error.message));