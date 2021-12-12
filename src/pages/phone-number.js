import React from "react";
import { Helmet } from "react-helmet";

export default function PhoneNumber(){
    return(
        <>
             <Helmet>                            
                <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
            </Helmet>
            <div className="container">
                <div className="col-sm-5 offset-sm-4 mt-10">
                    <p className="fs-4 fw-bold">What is you phone number</p>
                    <div className="mt-3">
                        <div className="mb-4">Please enter your name and phone number below.</div>   
                        <div className="">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder="First Name" required=""></input> 
                                <label for="floatingInput">First Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control mt-2" id="floatingInput" placeholder="Last Name" required=""></input> 
                                <label for="floatingInput">Last Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control mt-2" id="floatingInput" placeholder="Phone number" required=""></input> 
                                <label for="floatingInput">Phone number</label>
                            </div>
                            <div className="col-sm-12">
                                <button type="text" className="btn btn-primary mt-2 ps-4 pe-4">Verify</button>  
                            </div>
                        </div>
                    </div>

                </div>
            
            </div>       
        </>
    );
}