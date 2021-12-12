import React from "react";
import Layout from "../components/layout";
import SideBar from "../components/SideBar";
import '../components/css/style.css';
import freeproducts from "../images/freeproduct.png";
import freeproductsmfc from "../images/freeproduct-via-mcf.png";
import warrayfollowup from "../images/warray-follow-up.png";
import pdfebook from "../images/pdf-ebook.png";
import giftcard from "../images/gift-card.png";
export default function Funnels(){
    return (
        <Layout>
            <div className="d-flex side- align-items-start">
                <div className="h-100 border-end col-sm-2-custom">
                   <SideBar/>
                </div>
                <div className="container-fluid h-100 overflow-auto">
                    <div className="row m-3">
                        <div className="col-sm-6">
                          <i class="fal fa-ellipsis-v me-3"></i>
                          <i class="fal fa-video me-3 text-primary"></i>
                          <i class="fal fa-info-circle text-primary"></i>
                        </div>
                        <div className="col-sm-6 text-end">
                           Leads 0/0 <i class="fal fa-copyright text-primary"></i>
                        </div>
                    </div>
                    <div className="row m-3">
                        <div className="col-sm-12">
                            POST-PURCHASE
                        </div>
                    </div>
                    <div className="row m-3">
                        <div className="col-sm-3">
                            <div className="card h-100">
                                <img src={freeproducts} class="card-img-top" alt="..."/>
                                <div className="card-bclassNamedy m-3">
                                    <h5 className="card-title">Free Product</h5>
                                    <p className="card-text">1 Funnel</p>
                                    <div className="row">
                                        <div className="col-sm-6 text-center">
                                            <div><small>Leads Today</small></div>
                                            <div className="fs-2 fw-bold">0</div>
                                        </div>
                                        <div className="col-sm-6 text-center">
                                            <div><small>Spent Today</small></div>
                                            <div className="fs-2 fw-bold">$0.00</div>
                                        </div>
                                    </div> 
                                    <div className="row">
                                        <div className="col-sm-6 text-center">
                                            <a href="#" className="btn btn-dark-blue w-100">Funnels</a>                                            
                                        </div>
                                        <div className="col-sm-6 text-center">
                                           <a href="#" className="btn btn-primary w-100">Create</a>
                                        </div>
                                    </div>                              
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="card h-100">
                                <img src={freeproductsmfc} class="card-img-top" alt="..."/>
                                <div className="card-bclassNamedy m-3">
                                    <h5 className="card-title">Free Product Via MFC</h5>
                                    <p className="card-text">No Funnels</p>
                                    <small   className="card-text">Provide a free prodcuct(s) via a QR code on autopilot. Collect customer feedback and information.</small>
                                    
                                    <div className="text-center">
                                        <a href="#" className="btn btn-primary w-100 mt-4">Create</a>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="card h-100">
                                <img src={warrayfollowup} class="card-img-top" alt="..."/>
                                <div className="card-bclassNamedy m-3">
                                    <h5 className="card-title">Warranty Follow-Up</h5>
                                    <p className="card-text">No Funnels</p>
                                    <small   className="card-text">Provide  prodcuct warranty via a QR code on autopilot.</small>
                                    
                                    <div className="text-center">
                                        <a href="#" className="btn btn-primary w-100 mt-5">Create</a>
                                    </div>                                    
                                </div>
                            </div>
                        </div>  
                        <div className="col-sm-3">
                            <div className="card h-100">
                                <img src={pdfebook} class="card-img-top" alt="..."/>
                                <div className="card-bclassNamedy m-3">
                                    <h5 className="card-title">PDF E-Book</h5>
                                    <p className="card-text">No Funnels</p>
                                    <small  className="card-text">Provide  a PDF E-Book via QR code on auto pilot. Collect customer feedback and information.</small>
                                    
                                    <div className="text-center">
                                        <a href="#" className="btn btn-primary w-100 mt-4">Create</a>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3 mt-4">
                            <div className="card h-100">
                                <img src={giftcard} class="card-img-top" alt="..."/>
                                <div className="card-bclassNamedy m-3">
                                    <h5 className="card-title">Post Purchase Gift</h5>
                                    <p className="card-text">No Funnels</p>
                                    <small  className="card-text">Collect customer data in exchange for a gift.    </small>
                                    
                                    <div className="text-center">
                                        <a href="#" className="btn btn-primary w-100 mt-4">Create</a>
                                    </div>                                    
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
           
        </Layout>      
    );
}