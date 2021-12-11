import React from "react";
import Layout from "../components/Layout";

const fontName = {
    fontFamily: 'arial',
};
export default function Namemail() {
    return(
        <div className="col">
            <div className="pt-5">
                What is your name and email?
                <div className="col-12">
                    <form>
                        <input type="text" class="form-control" placeholder="First Name" required=""></input> 
                        <input type="last name" class="form-control mt-2" placeholder="Last Name" required=""></input>
                        <input type="email" class="form-control mt-2" placeholder="Email" required=""></input>
                        <button type="continue" class="btn btn-dark mt-2">Continue</button>
                    </form>
                </div>
            </div>
        </div>

    );
}
