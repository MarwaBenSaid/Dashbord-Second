import React, { Component } from 'react';
import './Signup.css';
class Login extends Component{
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
							<h2 className=" text-center ">Welcome back</h2>
							<p class="lead  mt-2 ">Please check your email and follow the instructions to verify your account. If you did not receive an email or if it has expired,  you can resend one.</p>
                          <form autocomplete="off">
                               
                                <div className="mb-2">
                                    <label for="emailaddress" className="form-label">Email address</label>
                                    <input className="form-control" type="email" id="emailaddress" required="" placeholder="Enter your email" />
                                </div>

								<div className="mb-2">
                                      
                                    <label for="password" className="form-label">Password</label>
                                    <input type="password" id="password" className="form-control" placeholder="Enter your password" />
                                </div>

                                <div className=" mt-2 link1 ">
                                    <a href="#">Forget you password</a>
                                </div> 

                                <div className="mb-2 mb-0 text-center ">
                                    <button className="btn mb-3 mb-0 text-center" type="submit"> Sign up </button>
                                </div>
								 <div className="mb-2 mb-0 text-center" >
                                    <button className="btn-gogle-auth btn-icon text-center"> 
                                        <img src="../assets/images/google.png" className='img-google'/>
                                          Sign up with Google

                                    </button>
                                 </div>
                                 <div className="mb-2 mb-0 text-center ">
                                 <p className="lead text-center">Don’t have an account? <a className="link">Sign up</a></p>
                        
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
export default Login;