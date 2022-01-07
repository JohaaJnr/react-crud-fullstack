const express = require('express')
const Router = express.Router()
const Task = require('../model/Task')

Router.get('/', async (req,res)=>{
   const items = await Task.find().sort({ CreatedAt: 1 })
   res.json({
      task: items
})
})

Router.post('/addtask/:taskname', (req,res)=>{
   

    try{
        const taskname = req.params.taskname
        const taskitem = new Task({
            task: taskname
        })
        let newItem = Task.create(taskitem)
        res.json({
            msg: "Task Created"
        })
    }catch(err){
        console.error(err)
    }
})




Router.get('/delete/:id', (req,res)=>{
    const id = req.params.id
    const delitem = Task.findByIdAndDelete(id, function(err){
        if(err){
            console.error(err)
        }else{
            res.json({
                msg: 'Task Deleted'
            })
        }
    })
    
})

module.exports = Router