const express = require('express');
const router = express.Router();
const Comment = require("../schemas/comment");


//댓글 생성
router.post("/comments", async (req, res) => {
  const { num, user, password, comment } = req.body
  
  let now = new Date()
  await Comment.create({num: num, user : user, password : password, comment : comment, createdAt: now })
  console.log(req.body)


  res.send({result:"message : 댓글을 생성하였습니다."})
})
//댓글 목록 조회
router.get("/comments", async (req, res) => {
  const commentall = await Comment.find()
  const a = commentall.map((commentall) => {
    return {
      commentId: commentall._id,
      user: commentall.user,
      comment: commentall.comment,
      createdAt: commentall.createdAt
    }
  })
  console.log(commentall)
  res.json(a)

})
//댓글 수정
router.put("/comments/:num", async (req, res) => {
  const {num} = req.params
  const {password, comment} = req.body
  const find = await Comment.findOne({num})
  if(password===find.password) {
    await Comment.updateOne({comment})
  }


  res.send({result:"message : 댓글을 수정하였습니다."})
})
//댓글 삭제
router.delete("/comments/:num", async (req, res) => {
  const {num} = req.params;
  const { password } = req.body
  const comment1 = await Comment.find({ num })
  const find= comment1[0].password 
  if(comment1.length > 0 && password===find) {
    
    await Comment.deleteOne({num})
  }



  res.send({result:"message : 댓글을 삭제하였습니다."})
})


module.exports = router;