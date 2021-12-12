import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./SideBar";

// import { withPrefix, Link } from "gatsby";

import { Helmet } from "react-helmet";


export default function Layout({children}){
    return (
        <>       
            <Helmet>                
                <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
            </Helmet>
            <div id="content" className="site-content landingpage lang-en landing_page h-100">
                <Header/>
                {children}
                <Footer/>
            </div>            
        </>
    );
}