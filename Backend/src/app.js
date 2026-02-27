const express = require("express");
const multer = require("multer");
const uploadfile = require("./services/storage.services");
const postModel = require("./models/post.models");
const app = express();
app.use(express.json());

const upload = multer({ storage: multer.memoryStorage() });

app.post("/create-post", upload.single("image"), async (req, res) => {
  console.log(req.body);
  console.log(req.file);
  const result = await uploadfile(req.file.buffer);
  const post = await postModel.create({
    caption: req.body.caption,
    image: result.url,
});

res.status(201).json({
  message: 'Post created successfully',
  post
})
});

app.get('/get-post', async(req,res)=>{
  const posts = await postModel.find()

  res.status(200).json({
    message:'Posts fetch successfully',
    posts
  })
})

module.exports = app;
