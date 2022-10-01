const express = require('express');
const router = express.Router();


//댓글 생성
router.post("/comments/:_postId", (req, res) => {



  res.send("'message':'게시글을 생성하였습니다.'")
})
//댓글 목록 조회
router.get("/posts", (req, res) => {

  

  res.send("")

})
//댓글 수정
router.put("post/:postId", (req, res) => {




  res.send("'message':'댓글을 수정하였습니다.'")
})
//댓글 삭제
router.delete("/posts/:_postId", (req, res) => {




  res.send("'message':'댓글을 삭제하였습니다.'")
})

const Comment = require("../schemas/comment");
module.exports = router;