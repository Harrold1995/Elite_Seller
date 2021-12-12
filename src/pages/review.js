import React from "react";
import { Helmet } from "react-helmet";

export default function Review(){
    return(
        <>
            <Helmet>                            
                <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
            </Helmet>
            <div className="container">
                <div className="col-sm-5 offset-sm-4 mt-10">
                    <p className="fs-4 fw-bold">Rate Your Experience</p>
                    <div className="mt-5">
                        <div className="mb-4">Please provide a few details about experience with our product.</div>
                        <div className="mt-5 mb-2">Your review</div>
                        <div className="col-m-5">
                            <textarea className="form-control resize-none"></textarea>
                        </div>
                        <div className="col-sm-12">
                            <button type="text" className="btn btn-primary mt-3 ps-4 pe-4">Next</button> 
                        </div>
                    </div>
                </div>
            </div>






        </>

    );
}