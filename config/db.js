const mongoose = require('mongoose')

const ConnectDB = async() =>{
   try{
    const connect = await(mongoose.connect(process.env.MONGO_URI))
    console.log('Mongodb Connected Successfully');
   }catch(err){
        console.error('Mongodb Connection Failed');
   }

}
module.exports = ConnectDB