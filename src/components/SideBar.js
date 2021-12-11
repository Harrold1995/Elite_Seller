import React from "react";
import './css/style.css';

export default function SideBar(){
    return (
        <div className="col-sm-2 col-sm-2-custom side-bar border-end">
            <div className="ms-3 pt-4 h-110">
                <div className="manage">
                    <div className="text-muted">
                        Manage
                    </div>
                    <div className="pt-1 pb-1 menu-link"><i className="fal fa-tachometer-alt-fast"></i> Dashboard</div>
                    <div className="pt-1 pb-1 menu-link"><i className="far fa-shopping-bag"></i> Products</div>
                    <div className="pt-1 pb-1 menu-link"><i className="far fa-bell"></i> Alerts</div>
                    <div className="pt-1 pb-1 menu-link"><i className="fas fa-luggage-cart"></i> Orders</div>
                    <div className="pt-1 pb-1 menu-link"><i className="far fa-users"></i> Customers</div>
                </div>
                <div className="manage mt-4">
                    <div className="text-muted">
                        Automate
                    </div>
                    <div className="pt-1 pb-1 menu-link"><i className="fas fa-tachometer-fast"></i> Keyboard Tracker</div>
                    <div className="pt-1 pb-1 menu-link"><i className="fal fa-comment"></i> Review Requester</div>
                    <div className="pt-1 pb-1 menu-link"><i className="fal fa-at"></i> Email Automation</div>
                </div>
                <div className="manage mt-4">
                    <div className="text-muted">
                        Tools
                    </div>
                    <div className="pt-1 pb-1 menu-link"><i className="fal fa-filter"></i> Funnels</div>
                    <div className="pt-1 pb-1 menu-link"><i className="fal fa-link"></i> QR Codes</div>
                    <div className="pt-1 pb-1 menu-link"><i className="far fa-credit-card"></i> Gift Cards</div>
                </div><div className="manage mt-4">
                    <div className="text-muted">
                        Research
                    </div>
                    <div className="pt-1 pb-1 menu-link"><i className="fal fa-filter"></i> Keyword Finder</div>
                    <div className="pt-1 pb-1 menu-link"><i className="fal fa-search"></i> Reverse ASN</div>
                    <div className="pt-1 pb-1 menu-link"><i className="fal fa-search-plus"></i> Reverse ASN+</div>
                </div>

            </div>
        </div>
    );
}