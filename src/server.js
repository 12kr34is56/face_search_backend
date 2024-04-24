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
app.use(bodyParser.urlencoded({ extended: true }));
const dbHost = process.env.MONGODB_URI  || 'mongodb://localhost:27017/face_search';
mongoose.connect("mongodb+srv://commercekv2003:20VSGx67QiXZUPMc@cluster0.lsbea0k.mongodb.net/facesearch?retryWrites=true&w=majority&appName=Cluster0").then(() =>
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
