const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

const URL = "mongodb://localhost:27017/spotify"

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Database connected"))
    .catch(err => console.log("hello", err));

const PORT = 4000;

app.listen(PORT, () => {
    console.log("server running on port " + PORT);
});


var songSchema = new mongoose.Schema({
    name: String,
    dor: String
});

var songModel = mongoose.model('songfrhkg', songSchema);

console.log("gtrf1");
app.get('/', (req, res) => {
    console.log("gtrf2");



    const instance = new songModel();
    instance.name = 'mako';
    instance.dor = 'not found';
    instance.save(function (err) {
        console.log(err);
    });

    const songData = songModel.find({}, (x, y) => {
        return res.send(String(y));
    });

});