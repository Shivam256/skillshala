import mongoose from 'mongoose'

const { Schema } = mongoose

mongoose.Promise = global.Promise

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email:{
      type:String,
      required:true,
  },
  password:{
    type:String
  },
  profilePic:String,

})

UserSchema.index({ name: 'text' })

module.exports =
  mongoose.models.User || mongoose.model('User', UserSchema);

