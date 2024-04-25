require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const errorHandler = require('./errors/image_error');

app.use(errorHandler);
app.use(cors());
app.use(bodyParser.json());
// Increase the payload size limit to 100 MB
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '100mb' }));
app.use(bodyParser.urlencoded({ extended: true }));
const dbHost = process.env.MONGODB_URI  || 'mongodb://localhost:27017/face_search';
mongoose.connect(dbHost).then(() =>
    console.log("Connected to the database!")).catch((err) =>
        console.log("Cannot connect to the database!", err)
    );

const ImageRouter = require('./routes/Image_route');
app.use('/api/image', ImageRouter);

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Face Search app listening at http://localhost: ${PORT}`);
}
);
