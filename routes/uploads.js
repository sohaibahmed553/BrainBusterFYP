const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const fileFilter = (req, file, cb) => {
    //accept file
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        cb(null, true);
        //reject file
    } else {
        cb(null, false);
    }
};

const upload = multer({
    storage: storage,

    limits: {
        fileSize: 1024 * 1024 * 5,
    },

    fileFilter: fileFilter,
});

router.post("/", upload.single("courseImage"), (req, res) => {
    console.log(req.file);
});

router.get("/", async (req, res, next) => {
    res.send("asdsa");
});

module.exports = router;
