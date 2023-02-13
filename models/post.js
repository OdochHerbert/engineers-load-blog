const mongoose=require('mongoose')
const Populate = require('../util/autopopulate');
 const postSchema = new mongoose.Schema({
     title:{
         type:String,
         required:true
     },
     body:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    },
    date:{
        type: Date,
        default: Date.now
    },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    subreddit: { type: String, required: true },
usersVoted : [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
voteScores : [{ type: Number }],
rank:{type:Number},

 })

 // Always populate the author field
postSchema
.pre('findOne', Populate('author'))
.pre('find', Populate('author'));

 const Posts=module.exports=mongoose.model('Posts', postSchema)