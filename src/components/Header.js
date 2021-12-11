import React from "react";

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
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a className="navbar-brand" href="#">
                    <i className="fas fa-bars"></i>
                </a>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link disabled">Disabled</a>
                    </li>
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>
    );
}