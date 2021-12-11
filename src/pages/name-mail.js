import React from "react";
import Layout from "../components/Layout";

const fontName = {
    fontFamily: 'arial',
};
export default function Namemail() {
    return(
        <div className="col-sm-5">
            <p className="bg-primary">What is your name and email?</p>
            <div className="mt-5">
                Please enter your name and email address below
                    <div className="row">
                        <div className="col-sm-12"> 
                            <input type="text" class="form-control" placeholder="First Name" required=""></input> 
                        </div>
                        <div className="col-sm-12">
                            <input type="last name" class="form-control mt-2" placeholder="Last Name" required=""></input>     
                        </div>
                        <div className="col-sm-12">
                            <input type="email" class="form-control mt-2" placeholder="Email" required=""></input>
                        </div>
                        <div className="col-sm-12">
                            <button type="continue" class="btn btn-dark mt-2">Continue</button>  
                        </div>
                    </div>
            </div>        
        </div>
    );
}
