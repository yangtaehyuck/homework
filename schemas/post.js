const mongoose = require("mongoose");

// 몽구스의 스키마를 새롭게 정의 그리고 내부에 있는것들이 각각의 schema를 의미
const postSchema = new mongoose.Schema({
  num: {
    type: Number,
    required: true,
    unique: true
  },

user: {
  type: String,
  required: true,
  unique: true
},
password: {
  type: Number,
  required: true
},
  title: {
    type: String
},
  content: {
    type: String
},
  createdAt: {
    type: String
}

});

// 밖으로 내보내기
module.exports = mongoose.model("Post", postSchema);