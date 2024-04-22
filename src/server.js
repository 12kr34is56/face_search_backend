const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require('dotenv').config();
const errorHandler = require('./errors/image_error');

app.use(errorHandler);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const dbHost = process.env.MONGODB_URI;
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
