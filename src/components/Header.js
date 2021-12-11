import React from "react";
import BrandIcon from "../images/logo.svg";
export default function Header(){
    return (
        // <header id="sticky-nav-header">
        //     <div className="wrapper">
        //         <div className="sale-ends">
        //             <div className="sale-ends-text"><span className="sale-ends-text-inner">Sale ends in</span></div>
        //             <div className="sale-ends-countdown">
        //                 <span className="countdown-item countdown-days" data-label="Days" data-label-single="D">00</span>
        //                 <span className="countdown-item countdown-hours" data-label="Hours" data-label-single="H">11</span>
        //                 <span className="countdown-item countdown-minutes" data-label="Mins" data-label-single="M">34</span>
        //                 <span className="countdown-item countdown-seconds" data-label="Sec" data-label-single="S">55</span>
        //            </div>	
        //         </div>		
        //         <div id="header-cta" className="header-section">
        //             <button type="button" className="button cta-button">Claim Coupon</button>		
        //         </div>                
        //     </div>
        // </header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid mt-2 mb-2">
                <div className="row w-100">
                    <div className="col-sm-4">
                    <i className="fas fa-bars"></i>
                    </div>
                    <div className="col-sm-4 text-center" >
                        <img src={BrandIcon} width="100"/>
                    </div>
                    <div className="col-sm-4 text-end">
                        <i className="fab fa-amazon me-3"></i>
                        <i className="fas fa-bell me-3"></i>
                        <i className="fas fa-cogs"></i>
                    </div>
                </div>              
            </div>
        </nav>
    );
}