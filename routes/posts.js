const express = require("express")
const router = express.Router()

const Post = require("../schemas/post");


//게시글 작성
router.post("/posts", async (req, res) => {
  const {num, user, password, title, content } = req.body
  
  let now = new Date()
  await Post.create({num: num ,user : user, password : password, title : title, content : content, createdAt: now })
  console.log(req.body)
  res.send({result:"message : 게시글을 생성하였습니다."})
})
//게시글 조회
router.get("/posts", async (req, res) => {
  const postall = await Post.find()
  const lookpost = []
  console.log(postall)
  for (let i = 0; i< postall.length; i++) {
    lookpost.push({
      postId: postall[i]._id,
      user: postall[i].user,
      title: postall[i].title,
      createdAt: postall[i].createdAt
    })
  }

  res.json(lookpost) 

})
//게시글 상세 조회
router.get("/postone", async (req, res) => {
  const name = await Post.find(req.body)
  const a = name.map((name) => {
    return {
      postId: name._id,
      user: name.user,
      title: name.title,
      content: name.content,
      createdAt: name.createdAt
    }
  })
  console.log(a)
  res.json(a)
})
//게시글 수정
router.put("/postsone/:num", async (req, res) => {
  const {num} = req.params
  const {password, title, content} = req.body
  const find = await Post.findOne({num})
  if(password===find.password) {
    await Post.updateOne({title, content})
  }
  res.send({result:"message : 게시글을 수정하였습니다."})
})
//게시글 삭제
router.delete("/postsone/:num", async (req, res) => {
  const {num} = req.params;
  const { password } = req.body
  const postId1 = await Post.find({ num })
  const find= postId1[0].password 
  if(postId1.length > 0 && password===find) {
    
    await Post.deleteOne({num})
  }

  res.send({result:"message : 게시글을 삭제하였습니다."})
})


module.exports = router