import React from "react";
import { Helmet } from "react-helmet";


const verticalCenter = {
    'margin-top':'10%'
}
export default function Namemail() {
    return(
        <>
            <Helmet>                            
                <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
            </Helmet>
            <div className="container">
                <div className="col-sm-4 offset-sm-4" style={verticalCenter}>
                    <p className="fs-4 fw-bold">What is your name and email?</p>
                    <div className="mt-3">
                        <div className="mb-4">Please enter your name and email address below</div>  
                        <div className="row">
                            <div className="col-sm-12"> 
                                <input type="text" className="form-control" placeholder="First Name" required=""></input> 
                            </div>
                            <div className="col-sm-12">
                                <input type="last name" className="form-control mt-2" placeholder="Last Name" required=""></input>     
                            </div>
                            <div className="col-sm-12">
                                <input type="email" className="form-control mt-2" placeholder="Email" required=""></input>
                            </div>
                            <div className="col-sm-12 mt-2">
                                <button type="continue" className="btn btn-primary mt-2">Continue</button>  
                            </div>
                        </div>
                    </div>        
                </div>
            </div>

        </>        
        
    );
}
