import mongoose from "mongoose";

const postModel = new mongoose.Schema({
    name: {type: String, required : true},
    prompt: {type: String, required : true},
    photo: {type: String, required : true}

});

const PostSchema = mongoose.model('post', postModel)

export default PostSchema;
