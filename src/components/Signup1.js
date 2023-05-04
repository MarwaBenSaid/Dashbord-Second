import React, { Component } from 'react';
import './Signup.css';
class Signup1 extends Component{
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
      </head>
<div className="container">
		<div className="card-login border-light ">
     
				<div className="row justify-content-center">
                    <div className="col-lg-6 col-md-12">
						<div className="padding">
                        <h2 className=" text-center ">Sign up</h2>
							
							<form autocomplete="off">
                               
                            <div className="mb-2">
                                    <label for="firstname" className="form-label">First name</label>
                                    <input className="form-control" type="text" id="firstname" required="" placeholder="Enter your first name" />
                                </div>
                                <div className="mb-2">
                                    <label for="lastname" className="form-label">Last name</label>
                                    <input className="form-control" type="text" id="lastname" required="" placeholder="Enter your last name" />
                                </div>
                                <div className="mb-2">
                                    <label for="emailaddress" className="form-label">Email address</label>
                                    <input className="form-control" type="email" id="emailaddress" required="" placeholder="Enter your email" />
                                </div>
                                <div className="mb-2">
                                    <label for="companyname" className="form-label">Company name</label>
                                    <input className="form-control" type="text" id="companyname" required="" placeholder="Enter your company name" />
                                </div>

                                <div className="mb-2">
                                    <label for="phonenumber" className="form-label">Phone Number</label>
                                    <input className="form-control" type="number" id="phonenumber" required="" placeholder="+216 | Enter your Phone Number" />
                                </div>

                               

                                <div className="mb-2 mb-0 text-center ">
                                    <button className="btn mb-3 mb-0 text-center" type="submit"> Continue </button>
                                </div>
								
                                
                                 
								
							</form>
						</div>
                        
					</div>
					<div className="col-lg-6 col-md-12">
                        <div className="padding  align-items-center ser ">

                                     <img src="../assets/images/Serops-Logo.png" alt="" className="logo " />    
                                     <img src="./assets/images/Serops-img.png" alt=""   className='img-ser'/>    
						
                                    
							
							
								
							

					
						</div>
					</div>
					
				</div>
            </div>
    
			</div>
		
            </div>
	
 
   )
}
}
export default Signup1;