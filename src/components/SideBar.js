import React from "react";



export default function SideBar(){
    return (
        <div className="col-sm-2">
            <div className="ms-3">
                <div className="manage mt-4">
                    <div className="text-muted">
                        Manage
                    </div>
                    <div className="pt-2 "><i className="fal fa-tachometer-alt-fast"></i> Dashboard</div>
                    <div className="pt-2 "><i className="far fa-shopping-bag"></i> Products</div>
                    <div className="pt-2 "><i className="far fa-bell"></i> Alerts</div>
                    <div className="pt-2 "><i className="fas fa-luggage-cart"></i> Orders</div>
                    <div className="pt-2 "><i className="far fa-users"></i> Customers</div>
                </div>
                <div className="manage mt-4">
                    <div className="text-muted">
                        Automate
                    </div>
                    <div className="pt-2 "><i className="fas fa-tachometer-fast"></i> Keyboard Tracker</div>
                    <div className="pt-2 "><i className="fal fa-comment"></i> Review Requester</div>
                    <div className="pt-2 "><i className="fal fa-at"></i> Email Automation</div>
                </div>
                <div className="manage mt-4">
                    <div className="text-muted">
                        Tools
                    </div>
                    <div className="pt-2 "><i className="fal fa-filter"></i> Funnels</div>
                    <div className="pt-2 "><i className="far fa-shopping-bag"></i> QR Codes</div>
                    <div className="pt-2 "><i className="far fa-bell"></i> Gift Cards</div>
                </div>
            </div>
        </div>
    );
}