import React, { Component } from 'react'
import axios from 'axios'
const Context = React.createContext()
export class Provider extends Component {
    state = {
        taskitems: [],
       heading: 'Loading...',
       updateId: '1',
      updateItem: 'ABC'
       
    }

    componentDidMount(){
       
        var options = {
            method: 'GET',
            url: 'api',
            headers: {
                'Access-Control-Allow-Headers' : '*'
            }
        }

        axios.request(options)
        .then(res=>{
            
            if(!res.data.task.length){
                this.setState({ taskitems: 'undefined',  heading: 'No Records Found'})
                
            }else{
           this.setState({heading: 'Todays Tasks', taskitems: res.data.task})
            }
        })
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer