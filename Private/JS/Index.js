const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "public")));

// import { ProfileFetcher } from "ProfileFetcher.js";
// const APIKey = process.env.APIKey

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "public/HTML/Home.html"));
});

// app.get("/api/profiles", function (req, res) {
//     res.send(RequestHypixelAPI(req.params.APIKey, "skyblock/profiles", req.params.playerUUID))
// });


app.listen(5000, () =>
    console.log(
        "Server is running on Port 5000, visit http://localhost:5000/ or http://127.0.0.1:5000 to access your website"
    )
);