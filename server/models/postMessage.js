import mongoose from 'mongoose';

//create a schema
const postSchema = mongoose.Schema({
title: String,
message: String,
creator: String,
tags:[String],
likeCount: {
    type:Number,
    default: 0
},
createedAt: {
    type:Date,
    default: new Date()
},
})

const PostMessage = mongoose.model('PostMessage', postSchema);
export default PostMessage;