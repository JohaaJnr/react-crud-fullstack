import React from 'react'
import './App.css';
import { Provider } from './components/Context'

import Createtask from './components/Createtask';
import Navbar from './components/Navbar'
import Showtasks from './components/Showtasks';


function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Provider>
  
      <div className='container'>
        <div className='row justify-content-center text-center'>
          <div className='col-md-8'>
            <Createtask />
            <Showtasks />
          </div>
        </div>
       
      </div>
     
      </Provider>
    </React.Fragment>
  );
}

export default App;
