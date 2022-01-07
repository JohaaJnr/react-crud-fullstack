import React, { Component } from 'react'
import axios from 'axios'
class Createtask extends Component {

    createTask = (e) =>{
        e.preventDefault()
        
        var taskValue = e.target.taskname.value
        console.log(taskValue)

        var options = {
            method: 'POST',
            url: `api/addtask/${taskValue}`,
            
            headers: {
                'Access-Control-Allow-Headers' : '*'
                
            }
        }
        axios.request(options)
        .then(res=>{
            alert(res.data.msg)
           window.location.reload(false);
        })
        
    }

   

    render() {
        return (
           <React.Fragment>
                <div className="jumbotron p-4 mt-2">
                    <h1 className="display-4">React Task Tracker Fullstack</h1>
                    <p className="lead">This is a simple task tracker app created with React, Express, Mongo, REST</p>
                    <hr className="my-4"/>
                        <form className="d-flex" onSubmit={this.createTask}>
                            <input className="form-control me-sm-2" type="text" name='taskname' placeholder="Type here...." />
                             <button className="btn btn-primary my-2 my-sm-0" type="submit">Submit</button>
                        </form>
                </div>
           </React.Fragment>
        )
    }
}
 export default Createtask