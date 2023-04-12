var mongoose = require('mongoose');
var schema = mongoose.Schema;

const postSchema = new schema({
    title : {
        type : String,
        require : true
    },
    message : {
        type : String,
        require : true
    },
    creator : {
        type : String,
        require : true
    },
    tags : {
        type : [String],
        require : true
    },
    selectedFile : {
        type : String,
        require : true
    },
    likeCount : {
        type : Number,
        default : 0
    },
    createdAt : {
        type : Date,
        default : new Date()
    }
})
module.exports = mongoose.model("post",postSchema);
