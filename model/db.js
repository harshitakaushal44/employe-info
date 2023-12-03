const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Employee-registration').then(()=>console.log('db connect')).catch((err)=>console.log('err.message'))