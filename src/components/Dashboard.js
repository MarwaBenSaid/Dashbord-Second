import React, { Component } from 'react';
import './Dashboard.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import ProjectList from './ProjectList';
class Dashboard extends Component{
render(){
    return(
        <div className='dashboard'>
     
       <Navbar />
        <Sidebar />
       
         </div>
    )

    
}
}
export default Dashboard;