import React, { Component } from 'react'
import axios from 'axios'
import { Consumer } from './Context'

class Showtasks extends Component {


    
deleteItem = (e) => {
    var taskid = e.target.attributes.getNamedItem('data-id').value;
    var options = {
        method: 'GET',
        url: `api/delete/${taskid}`,
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
           <Consumer>
               { value=>{
                   if(value.taskitems === 'undefined'){
                       return(
                           <p>No Records Found</p>
                       )
                   }else{
                   return (
                       <div>
                          <p>{value.heading}</p> 
                    <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Index</th>
                            <th scope="col">Todos</th>
                            
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    { value.taskitems.map(item=>{
                            return (
                                <tr className="table-dark" key={item._id}>
                                    <th scope="row">#</th>
                                    <td >{item.task}</td>
                                    
                                    <td><button className='btn btn-danger' data-id={item._id} onClick={this.deleteItem} >X</button></td>
                                </tr>
                                
                            )
                        })}
                              
                </tbody>
                </table>
                          
                </div>
                   )
                 }
               }}


               
           </Consumer> 
        )
    }
}
export default Showtasks
