const mongoose = require("mongoose");

// 몽구스의 스키마를 새롭게 정의 그리고 내부에 있는것들이 각각의 schema를 의미
const postSchema = new mongoose.Schema({

postId: {
  type: String, // 타입
  required: true, // 무조건 필요한지
  unique: true // 고유인지 (동일한 데이터x)
},
user: {
  type: String,
  required: true,
  unique: true
},
  title: {
    type: String
},
  createdAt: {
    type: String
}

});

// 밖으로 내보내기
module.exports = mongoose.model("Post", postSchema);