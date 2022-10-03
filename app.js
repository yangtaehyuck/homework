const express = require('express')
const app = express()
const port = 3000
const postsRouter = require('./routes/posts')
const commentsRouter = require('./routes/comments')
const connect = require("./schemas/index")
connect()

// app.use(express.json()); //body parser Middleware 를 쓰기위한 문법이다   =>     req.body를 사용하기위해서
//전역 미들 웨어 => 모든 미들웨어에 적용         req에 들어있는 body를 볼때 사용
app.use(express.json())    //body-parser 를 사용하기위해 선언함
app.use([postsRouter, commentsRouter])


//localhost:3000 -> localhost:3000/api/뒤에 작성한곳으로 감
// app.use("/api", )  //이 코드 위에 있는 모든 코드를 실행한뒤에 app.use()를 거치고 다음 밑에 코드를 실행하라      //app.use()는 위에 const app = express() app함수에서 express()에서 use()를 실행함
//미들 웨어         경로가 /api인 모든 코드는 뒤에 작성한곳으로 가라는 뜻

app.listen(port, () => {
  console.log(port, '포트로 서버가 열렸어요!');
  });