import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { withPrefix, Link } from "gatsby";

import { Helmet } from "react-helmet";


export default function Layout({children}){
    return (
        <>       
            <Helmet>
                {/* <link rel='stylesheet' id='sendpromos-style-css'  href='https://pages.landingcube.com/wp-content/themes/landingcube/style.min.css?ver=49.0.0' type='text/css' media='all' />
                <link rel='stylesheet' id='sendpromos-layout_3-css'  href='https://pages.landingcube.com/wp-content/themes/landingcube/templates/layouts/layout_3/layout_3.min.css?ver=49.0.0' type='text/css' media='all' />
                <link rel='stylesheet' id='google-fonts-lato-css'  href='https://fonts.googleapis.com/css?family=Lato%3A400%2C700%2C900&#038;ver=5.8.1' type='text/css' media='all' />
                <link rel="https://api.w.org/" href="https://pages.landingcube.com/wp-json/" /><link rel="canonical" href="https://pages.landingcube.com/promo/pusheen-happy-birthday-plush-modern/" />
                <link rel="alternate" type="application/json+oembed" href="https://pages.landingcube.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fpages.landingcube.com%2Fpromo%2Fpusheen-happy-birthday-plush-modern%2F" />
                <link rel="alternate" type="text/xml+oembed" href="https://pages.landingcube.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fpages.landingcube.com%2Fpromo%2Fpusheen-happy-birthday-plush-modern%2F&#038;format=xml" /> */}
              <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
                {/* <script type='text/javascript' src='https://pages.landingcube.com/wp-includes/js/jquery/jquery.min.js?ver=3.6.0' id='jquery-core-js'></script>
                <script type='text/javascript' src='https://pages.landingcube.com/wp-content/themes/landingcube/third-party/slick/slick.min.js?ver=49.0.0' id='slick-js'></script>
                <script type='text/javascript' src='https://pages.landingcube.com/wp-content/themes/landingcube/templates/layouts/layout_3/layout_3.min.js?ver=49.0.0' id='sendpromos-layout_3-js'></script>
                <script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.6.1/iframeResizer.contentWindow.min.js?ver=3.6.1' id='iframeresizer-js'></script>
                <script type='text/javascript' src='https://pages.landingcube.com/wp-includes/js/wp-embed.min.js?ver=5.8.1' id='wp-embed-js'></script> */}
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>

            </Helmet>
            <div id="content" className="site-content landingpage lang-en landing_page">
                <Header/>
                <main>{children}</main>
                <Footer/>
            </div>            
        </>
    );
}