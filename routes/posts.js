const express = require("express")
const router = express.Router()
//게시글 작성
router.post("/posts", (req, res) => {



  res.send("'message':'게시글을 생성하였습니다.'")
})
//게시글 조회
router.get("/posts", (req, res) => {


  res.send("")

})
//게시글 상세 조회
router.get("post/:postId", (req, res) => {



})
//게시글 수정
router.put("/posts/:_postId", (req, res) => {


  res.send("'message':'게시글을 수정하였습니다.'")
})

const Post = require("../schemas/post");
module.exports = router