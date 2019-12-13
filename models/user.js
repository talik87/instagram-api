const mongoose = require('mongoose');

mongoose.model('User',{
    name: String,
    username: {
     type:String,
     required: true,
     unique: true,
     validate(value){
       return value.length > 4;//value.includes('@') && value.length > 2;
     },
    },
    password: String,
    birthDate: Date,
    gender: {
      type: String,
      enum:['f','m']
    },
    githubLink: String,
    about: String,
    created: {
        type: Date,
        default: Date.now
    }
  });