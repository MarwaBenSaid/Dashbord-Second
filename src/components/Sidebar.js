import React, { Component } from 'react';
import './Sidebar.css';

import { Icon } from '@iconify/react';
import Dashboard from './Dashboard';
import { Link } from 'react-router-dom';
class Sidebar extends Component{
render(){
    return(
      
        
<div>
<head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Dashboard</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css"
          integrity="sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/chartist.js/latest/chartist.min.css"
        />

        <link rel="stylesheet" href="Dashboard.css" />
      </head>
        <div className="container-fluid">
        <div className="row">
            <nav id="sidebar" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
              <a className="nav-link active text-center " aria-current="page" href="/">
                <img src="../assets/images/Serops-Logo.png" alt="" className="logo " /> 
              </a>
                <div className="position-sticky">
                    <ul className="nav flex-column">
                      
                        
                      
                        <li className="nav-item">
                          <a className="nav-link " activeclassName="active" aria-current="page" href="/">
                           
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11 21H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h6v18zm2 0h6c1.1 0 2-.9 2-2v-7h-8v9zm8-11V5c0-1.1-.9-2-2-2h-6v7h8z"/></svg> 
                            <span className="ml-2">Dashboard</span>
                          </a>
                        </li>
                        <li className="nav-item ">
                          <a className="nav-link" activeclassName="active" href="/project">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="6" r="1" fill="currentColor"/><path fill="currentColor" d="M6 17h12v2H6zm4-5.17l2.792 2.794l3.932-3.935L18 12V8h-4l1.31 1.275l-2.519 2.519L10 9l-4 4l1.414 1.414L10 11.83z"/><path fill="currentColor" d="M19 3h-3.298a4.497 4.497 0 0 0-.32-.425l-.01-.012a4.426 4.426 0 0 0-2.89-1.518a2.577 2.577 0 0 0-.964 0a4.426 4.426 0 0 0-2.89 1.518l-.01.012a4.497 4.497 0 0 0-.32.424V3H5a3.003 3.003 0 0 0-3 3v14a3.003 3.003 0 0 0 3 3h14a3.003 3.003 0 0 0 3-3V6a3.003 3.003 0 0 0-3-3Zm1 17a1 1 0 0 1-1 1H5a1.001 1.001 0 0 1-1-1V6a1.001 1.001 0 0 1 1-1h4.55a2.5 2.5 0 0 1 4.9 0H19a1.001 1.001 0 0 1 1 1Z"/></svg> 
                           <span className="ml-2">Project</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" activeclassName="active" href="/application">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs><path id="eosIconsApplicationOutlined0" fill="currentColor" d="m9 18l.7-.7l.7-.7l-1.3-1.3L7.8 14l1.3-1.3l1.3-1.3l-.7-.7L9 10l-2 2l-2 2l2 2l2 2zm4.6-1.4l.7.7l.7.7l2-2l2-2l-2-2l-2-2l-.7.7l-.7.7l1.3 1.3l1.3 1.3l-1.3 1.3l-1.3 1.3z"/></defs><path fill="currentColor" d="M1 3v2h22V3a2.001 2.001 0 0 0-2-2H3a2.001 2.001 0 0 0-2 2Zm3.007 1.008a1 1 0 1 1 .999-1a1 1 0 0 1-1 1Zm2.997-.001a1 1 0 1 1 1-1a1.002 1.002 0 0 1-1 1ZM1 6v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V6Zm20 14H3V8h18Z"/><use href="#eosIconsApplicationOutlined0"/><use href="#eosIconsApplicationOutlined0"/></svg> <span className="ml-2">Applications</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link"  activeclassName="active" href="/environnement">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M17 16.47V7.39l-6 4.54M2.22 9.19a.858.858 0 0 1-.02-1.15l1.2-1.11c.2-.18.69-.26 1.05 0l3.42 2.61l7.93-7.25c.32-.32.87-.45 1.5-.12l4 1.91c.36.21.7.54.7 1.15v13.5c0 .4-.29.83-.6 1l-4.4 2.1c-.32.13-.92.01-1.13-.2l-8.02-7.3l-3.4 2.6c-.38.26-.85.19-1.05 0l-1.2-1.1c-.32-.33-.28-.87.05-1.2l3-2.7"/></svg> <span className="ml-2">Environments</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" activeclassName="active" href="/code">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m9.6 15.6l1.4-1.425L8.825 12L11 9.825L9.6 8.4L6 12Zm4.8 0L18 12l-3.6-3.6L13 9.825L15.175 12L13 14.175ZM5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Z"/></svg>
                            <span className="ml-2">Sources codes </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" activeclassName="active" href="/server">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4 1h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1m0 8h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1m0 8h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1M9 5h1V3H9v2m0 8h1v-2H9v2m0 8h1v-2H9v2M5 3v2h2V3H5m0 8v2h2v-2H5m0 8v2h2v-2H5Z"/></svg>
                            <span className="ml-2">Servers</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" activeclassName="active" href="/user">
                          <Icon icon="mdi:user-multiple" width="24" height="24" />
                           <span className="ml-2">Users</span>
                          </a>
                        </li>
                        
                        
                      
                      </ul>
                </div>
            </nav>
            
        </div>
    </div>
    
  
  
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js" integrity="sha384-oesi62hOLfzrys4LxRF63OJCXdXDipiYWBnvTl9Y9/TRlw5xlKIEHpNyvvDShgf/" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/chartist.js/latest/chartist.min.js"></script>
    
    <script async defer src="https://buttons.github.io/buttons.js"></script>
    </div>
   )
}
}
export default Sidebar;