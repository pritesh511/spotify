const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");
const app = express();
// const router = express.Router();
const PORT = 4000;

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

const URL = "mongodb://localhost:27017/spotify";

mongoose
  .connect(URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("hello", err));

app.listen(PORT, () => {
  console.log("server running on port " + PORT);
});

var songSchema = new mongoose.Schema({
  name: String,
  dor: String,
  img: String,
});

var artistSchema = new mongoose.Schema({
  name: String,
  dob: String,
  bio: String,
});

var songModel = mongoose.model("song", songSchema);
var artistModel = mongoose.model("artist", artistSchema);

app.post("/song", (req, res) => {
  const { songName, releaseDate, songImage } = req.body;
  let song = new songModel({
    name: songName,
    dor: releaseDate,
    img: songImage,
  });
  song.save();
});

app.post("/artist", (req, res) => {
  const { name, dob, bio } = req.body;
  let artist = new artistModel({
    name: name,
    dob: dob,
    bio: bio,
  });
  artist.save();
});

// const data = songModel.toString();

// app.get("/song", (req, res) => {
//   res.send("sahdiahi");
// });
