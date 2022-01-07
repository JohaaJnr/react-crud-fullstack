const express = require('express')
const dotenv = require('dotenv')
const path = require('path')
const db = require('./config/db');
const app = express()
const Routes = require('./routes/api')

dotenv.config({ path: './config/config.env'})
const Port = process.env.PORT || 8000
db();

app.use(express.urlencoded({ extended: true}))

app.use('/api', Routes )

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, 'client/build')))
    app.get('*', (req, res)=>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

//Routes
//http://localhost:5000/api/
//http://localhost:5000/api/addtask
//http://localhost:5000/api/edittask/:id
//http://localhost:5000/api/updatetask/:id
//http://localhost:5000/api/delete/:id

app.listen(Port, ()=>{
    console.log(`App Listening on Port: ${Port}`)
})