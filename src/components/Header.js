import React from "react";

export default function Header(){
    return (
        <header id="sticky-nav-header">
            <div className="wrapper">
                <div className="sale-ends">
                    <div className="sale-ends-text"><span className="sale-ends-text-inner">Sale ends in</span></div>
                    <div className="sale-ends-countdown">
                        <span className="countdown-item countdown-days" data-label="Days" data-label-single="D">00</span>
                        <span className="countdown-item countdown-hours" data-label="Hours" data-label-single="H">11</span>
                        <span className="countdown-item countdown-minutes" data-label="Mins" data-label-single="M">34</span>
                        <span className="countdown-item countdown-seconds" data-label="Sec" data-label-single="S">55</span>
                   </div>	
                </div>		
                <div id="header-cta" className="header-section">
                    <button type="button" className="button cta-button">Claim Coupon</button>		
                </div>                
            </div>
        </header>
    );
}