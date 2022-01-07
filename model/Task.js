const mongoose = require('mongoose')
const TaskSchema = new mongoose.Schema({
    task:{
        type: String,
        required: true
       
    },
    CreatedAt:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Task', TaskSchema);