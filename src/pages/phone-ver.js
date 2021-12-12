import React from "react";
import { Helmet } from "react-helmet";
import '../components/css/style.css';


export default function PhoneVerify() {
    return(
        <>
            <Helmet>                            
                <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
            </Helmet>
            <div className="container">
                <div className="col-sm-5 offset-sm-4 mt-10">
                    <p className="fs-4 fw-bold">Phone verification</p>
                    <div className="mt-3">
                        <div className="mb-4">We have just sent a verification code to <b> 6266428210</b></div>
                        <div className="mb-4">Once you get code, enter it below</div>
                        <div className="row">
                            <div className="col-sm-6"> 
                                <input type="text" value="0000" className="form-control fs-6 fw-bold text-center" placeholder="Code" required=""></input>
                            </div>
                            <div className="col-sm-6"> 
                                <button type="verify" className="btn btn-primary">Verify</button>
                            </div>
                        </div> 
                    </div> 
                    <div className="mt-4 mb-4">Click below if you need to change your email address</div>
                        <div className="row">
                            <div className="col-sm-5">
                                <button type="button" className="form-control text-center">Change Number</button>
                            </div>
                        </div>
                </div>
            </div>
                   
        
        
        
        
        
        
        
        </>

    );
}