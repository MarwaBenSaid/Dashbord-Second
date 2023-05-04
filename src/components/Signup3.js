import React, { Component } from 'react';
import './Signup.css';
class Signup3 extends Component{
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
		<div className="card-login border-light  ">
     
				<div className="row justify-content-center">
                    <div className="col-lg-6 col-md-12">
						<div className="padding">
                        <img src="../assets/images/subtract.png" alt="" class=" img2 text-center " /> 
                        <h5 className=" text-center ">Verify by Email</h5>
                        <p class="lead  mt-2 ">Please check your email and follow the instructions to verify your account. If you did not receive an email or if it has expired,  you can resend one.</p>
                            <div class="mb-2 mb-0 text-center">
                                <button class="btn mb-3 mb-0 text-center " type="submit">Resend my verification email!</button>
                            </div>
							
						
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
export default Signup3;