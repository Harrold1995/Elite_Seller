import React from "react";
import Layout from "../components/layout";

const imgStyle = {
    display: 'inline-block',
    width: '100%'
};
const slickTrack ={
    opacity: 1,
    width: '2165px',
    transform: 'translate3d(0px, 0px, 0px)'
}
const slickSlide = {
    width: '433px'
}
const h524 = {
    height:'524px'
}
const w1170px = {
    width:'1170px'
}
const slickTrack1 = {
    opacity: 1, width: '7020px', transform: 'translate3d(0px, 0px, 0px)'
}
const reviewStyle = {
    width: '100%', display: 'inline-block'
}


function FrontPage() {
  return (
    <Layout>
        <section id="product">
            <div className="wrapper">
                <div id="product-wrapper">
                <div id="main-headline" className="headline content-editable">An Exclusive Offer For You</div>
                <div id="product-cta-headline" className="content-editable"> GUND Pusheen Happy Birthday Plush, 10.5" x 5" x 7" </div>
                    <div className="product-cta-percent-off">
                        <div className="product-cta-percent-off-inner percent">
                        <span className="cta-percent-off-value">96%</span>
                        <span className="cta-percent-off-text">off</span>
                        </div>
                    </div>
                    <div id="product-img">
                        <div id="product-content" className="slick-initialized slick-slider">
                            <div className="slick-list draggable">
                                <div className="slick-track" style={slickTrack}>
                                    <div className="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style={slickSlide}>
                                        <div>
                                        <img width="500" height="500" src="https://cdn.landingcube.com/1/products/30166/product_image_5f64882ad28ce.jpg" style={imgStyle}/>
                                        </div>
                                    </div>
                                    <div className="slick-slide" data-slick-index="1" aria-hidden="true" tabIndex="-1" style={slickSlide}>
                                        <div>
                                        <img width="500" height="500" src="https://cdn.landingcube.com/1/products/30166/product_image_5f64882b1b8da.jpg" style={imgStyle} />
                                        </div>
                                    </div>
                                    <div className="slick-slide" data-slick-index="2" aria-hidden="true" tabIndex="-1" style={slickSlide}>
                                        <div>
                                        <img width="500" height="500" src="https://cdn.landingcube.com/1/products/30166/product_image_5f64882b617d4.jpg" style={imgStyle}/>
                                        </div>
                                    </div>
                                    <div className="slick-slide" data-slick-index="3" aria-hidden="true" tabIndex="-1" style={slickSlide}>
                                        <div>
                                        <img width="500" height="500" src="https://cdn.landingcube.com/1/products/30166/product_image_5f64882b9f2d4.jpg" style={imgStyle} />
                                        </div>
                                    </div>
                                    <div className="slick-slide" data-slick-index="4" aria-hidden="true" tabIndex="-1" style={slickSlide}>
                                        <div>
                                        <img width="500" height="500" src="https://cdn.landingcube.com/1/products/30166/product_image_5f64882bdbcbc.jpg" style={imgStyle} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="product-nav-arrows">
                            <span id="product-nav-right" className="slick-arrow" aria-disabled="false" ></span>
                            <span id="product-nav-left" className="slick-arrow slick-disabled" aria-disabled="true" ></span>
                        </div>
                        <div id="product-img-nav">
                            <div>
                                <img className="selected" src="https://cdn.landingcube.com/1/products/30166/product_image_5f64882ad28ce.jpg"/>
                                <img src="https://cdn.landingcube.com/1/products/30166/product_image_5f64882b1b8da.jpg"/>
                                <img src="https://cdn.landingcube.com/1/products/30166/product_image_5f64882b617d4.jpg"/>
                                <img src="https://cdn.landingcube.com/1/products/30166/product_image_5f64882b9f2d4.jpg"/>
                                <img src="https://cdn.landingcube.com/1/products/30166/product_image_5f64882bdbcbc.jpg"/>
                            </div>
                        </div>
                    </div>
                    <div className="product-cta-sale-price"> $0.99 <span className="product-cta-regular-price">Was: <span className="cta-regular-price-strikethrough">$25.00</span>
                        </span>
                    </div>
                    <div id="product-cta">
                        <button type="button" className="button cta-button">Claim Coupon</button>
                        <div className="sale-ends">
                        <div className="sale-ends-text">
                            <span className="sale-ends-text-inner">Sale ends in</span>
                        </div>
                        <div className="sale-ends-countdown">
                            <span className="countdown-item countdown-days" data-label="Days" data-label-single="D">00</span>
                            <span className="countdown-item countdown-hours" data-label="Hours" data-label-single="H">03</span>
                            <span className="countdown-item countdown-minutes" data-label="Mins" data-label-single="M">17</span>
                            <span className="countdown-item countdown-seconds" data-label="Sec" data-label-single="S">12</span>
                        </div>
                        </div>
                    </div>
                    <div id="product-cta-after">
                        <img width="104" height="50" src="https://pages.landingcube.com/wp-content/themes/landingcube/assets/available_at_amazon_en_vertical.png"/>
                        <div id="product-cta-scarcity">
                        <span className="coupon-count coupons-left">11</span> Coupons left <br/>
                        <span className="coupon-count coupons-used">39</span> Coupons used
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="description">
            <div className="wrapper">
                <div id="description-wrapper-inner">
                    <svg className="nc-icon glyph icon-about section-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="rgb( var(--main-bg-color ) )" fill-rule="nonzero" d="M11.812 0C5.289 0 0 5.289 0 11.812s5.289 11.813 11.812 11.813 11.813-5.29 11.813-11.813C23.625 5.289 18.335 0 11.812 0zm2.459 18.307c-.608.24-1.092.422-1.455.548a3.838 3.838 0 0 1-1.262.189c-.736 0-1.309-.18-1.717-.539a1.74 1.74 0 0 1-.611-1.367c0-.215.015-.435.045-.659a8.23 8.23 0 0 1 .147-.759l.761-2.688c.067-.258.125-.503.171-.731.046-.23.068-.441.068-.633 0-.342-.071-.582-.212-.717-.143-.135-.412-.201-.813-.201-.196 0-.398.029-.605.09-.205.063-.383.12-.529.176l.201-.828c.498-.203.975-.377 1.43-.521a4.225 4.225 0 0 1 1.29-.218c.731 0 1.295.178 1.692.53.395.353.594.812.594 1.376 0 .117-.014.323-.041.617a4.129 4.129 0 0 1-.152.811l-.757 2.68a7.582 7.582 0 0 0-.167.736 3.892 3.892 0 0 0-.073.626c0 .356.079.599.239.728.158.129.435.194.827.194.185 0 .392-.033.626-.097.232-.064.4-.121.506-.17l-.203.827zm-.134-10.878a1.807 1.807 0 0 1-1.275.492c-.496 0-.924-.164-1.28-.492a1.57 1.57 0 0 1-.533-1.193c0-.465.18-.865.533-1.196a1.812 1.812 0 0 1 1.28-.497c.497 0 .923.165 1.275.497.353.331.53.731.53 1.196 0 .467-.177.865-.53 1.193z"></path>
                    </svg>
                    <div className="headline content-editable" id="description-headline">About the product</div>
                    <div id="description-img-wrapper">
                        <div id="description-img-wrapper-inner">
                        <img id="description-image" src="data:image/jpeg;base64,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"/>
                        </div>
                    </div>
                    <div id="product-description" className="content-editable">
                        <ul>
                        <li> Includes one 10. 5" pusheen birthday plush. </li>
                        <li> Surface-washable construction for easy cleaning; age 1+. </li>
                        <li> Pusheen birthday plush toy features party hat and embroidered kitty cupcake. </li>
                        <li> Made from soft, huggable material that meets famous gund quality standards. </li>
                        <li> Features unique animated hangtag with moving tail and whiskers. Dimensions: 10. 5" x 5" x 7" approximately. </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <section id="review-div">
            <div className="wrapper">
                <svg class="nc-icon glyph icon-testimonial section-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <span fill="none" fill-rule="evenodd">
                    <path fill="rgb( var(--main-bg-color) )" d="M19.478 0H4.522C2.033 0 .016 1.978.016 4.418v9.618c0 2.44 2.017 4.418 4.506 4.418H6.67c.102 0 .184.081.184.181v4.744c0 .561.7.833 1.092.425l5.077-5.293a.187.187 0 0 1 .134-.057h6.322c2.489 0 4.506-1.978 4.506-4.418V4.418c0-2.44-2.017-4.418-4.506-4.418z"></path>
                    <path fill="#EC5569" d="M17.063 5.734a2.971 2.971 0 0 0-4.143 0l-.646.634a.4.4 0 0 1-.558 0l-.636-.624a2.971 2.971 0 0 0-4.143 0 2.833 2.833 0 0 0 0 4.062l4.78 4.687a.4.4 0 0 0 .557 0l4.79-4.697a2.833 2.833 0 0 0 0-4.062z"></path>
                    <path fill="#FFF" d="M17.063 5.734a2.971 2.971 0 0 0-4.143 0l-.646.634a.4.4 0 0 1-.558 0l-.636-.624a2.971 2.971 0 0 0-4.143 0 2.833 2.833 0 0 0 0 4.062l4.78 4.687a.4.4 0 0 0 .557 0l4.79-4.697a2.833 2.833 0 0 0 0-4.062z"></path>
                </span>
                </svg>
                <div className="headline content-editable" id="review-headline">What Our Customers Are Saying</div>
                <div id="reviews" className="slick-initialized slick-slider slick-dotted">
                <div className="slick-list draggable" style={h524}>
                    <div className="slick-track" style={slickTrack1}>
                    <div className="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" role="tabpanel" id="slick-slide10" style={w1170px}>
                        <div>
                        <div className="review" style={reviewStyle}>
                            <div className="review-title content-editable">Best CHristmas Because Of Pusheen Items!</div>
                            <div className="review-text content-editable">I got this Pusheen for Christmas from my Nana. It's so fat and adorable. I got a lot of other Pusheen items for Christmas too :) I love all of them so dearly! When I opened the package it was so squishy. I had to squish it a bit to get it to a normal shape. It's an amazing plush and I wish I could order every single Pusheen item there is. Credits to my Mom and Nana for giving me the best Christmas ever! They really know what I love. I screamed really loud for every item I got.Details: The plush is very soft and cuddly. It has a nice hat and a little fluffy ball on top. The whiskers get a little annoying by the way. The cupcake has a cute face and is very soft. The candle is a hard but plush material. The little legs don't hold the push up sometimes.. mostly the tail on the back. The back has 2 big stripes. The tail has 3 stripes. All stripes are gray. Under the birthday hat is the 3 little stripes on the head. They are also gray. The tag has a cute effect where the fat stomach moves as if Pusheen is breathing.. and the tail wags too! I hope this review helps! Please click the button to show it helped you! Happy Shopping! &lt;3 &lt;3 &lt;3 :) :) :) :) &gt;.&lt; &gt;.&lt;</div>
                            <div className="review-stars">
                            <svg className="nc-icon glyph icon-star " xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16">
                      
                                <path fill="rgb( var(--main-bg-color) )" d="M15.144,5.438l-4.316-0.627L8.897,0.9c-0.338-0.683-1.456-0.683-1.794,0l-1.93,3.911L0.856,5.438
                                C0.039,5.557-0.292,6.565,0.302,7.145l3.124,3.044l-0.737,4.299c-0.139,0.814,0.717,1.439,1.451,1.054L8,13.513l3.861,2.03
                                c0.728,0.381,1.591-0.234,1.451-1.054l-0.737-4.299l3.124-3.044C16.292,6.565,15.961,5.557,15.144,5.438z"></path>
                           
                            </svg>
                            <svg className="nc-icon glyph icon-star " xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16">
                       
                                <path fill="rgb( var(--main-bg-color) )" d="M15.144,5.438l-4.316-0.627L8.897,0.9c-0.338-0.683-1.456-0.683-1.794,0l-1.93,3.911L0.856,5.438
                                C0.039,5.557-0.292,6.565,0.302,7.145l3.124,3.044l-0.737,4.299c-0.139,0.814,0.717,1.439,1.451,1.054L8,13.513l3.861,2.03
                                c0.728,0.381,1.591-0.234,1.451-1.054l-0.737-4.299l3.124-3.044C16.292,6.565,15.961,5.557,15.144,5.438z"></path>
                             
                            </svg>
                            <svg className="nc-icon glyph icon-star " xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16">
                           
                                <path fill="rgb( var(--main-bg-color) )" d="M15.144,5.438l-4.316-0.627L8.897,0.9c-0.338-0.683-1.456-0.683-1.794,0l-1.93,3.911L0.856,5.438
                                C0.039,5.557-0.292,6.565,0.302,7.145l3.124,3.044l-0.737,4.299c-0.139,0.814,0.717,1.439,1.451,1.054L8,13.513l3.861,2.03
                                c0.728,0.381,1.591-0.234,1.451-1.054l-0.737-4.299l3.124-3.044C16.292,6.565,15.961,5.557,15.144,5.438z"></path>
                        
                            </svg>
                            <svg className="nc-icon glyph icon-star " xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16">
                            
                                <path fill="rgb( var(--main-bg-color) )" d="M15.144,5.438l-4.316-0.627L8.897,0.9c-0.338-0.683-1.456-0.683-1.794,0l-1.93,3.911L0.856,5.438
                                C0.039,5.557-0.292,6.565,0.302,7.145l3.124,3.044l-0.737,4.299c-0.139,0.814,0.717,1.439,1.451,1.054L8,13.513l3.861,2.03
                                c0.728,0.381,1.591-0.234,1.451-1.054l-0.737-4.299l3.124-3.044C16.292,6.565,15.961,5.557,15.144,5.438z"></path>
                           
                            </svg>
                            <svg className="nc-icon glyph icon-star " xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16">
                      
                                <path fill="rgb( var(--main-bg-color) )" d="M15.144,5.438l-4.316-0.627L8.897,0.9c-0.338-0.683-1.456-0.683-1.794,0l-1.93,3.911L0.856,5.438
                                C0.039,5.557-0.292,6.565,0.302,7.145l3.124,3.044l-0.737,4.299c-0.139,0.814,0.717,1.439,1.451,1.054L8,13.513l3.861,2.03
                                c0.728,0.381,1.591-0.234,1.451-1.054l-0.737-4.299l3.124-3.044C16.292,6.565,15.961,5.557,15.144,5.438z"></path>
                                
                            </svg>
                            </div>
                            <div className="review-author content-editable">James Higgins</div>
                        </div>
                        </div>
                    </div>
                    <div className="slick-slide" data-slick-index="1" aria-hidden="true" tabindex="-1" role="tabpanel" id="slick-slide11" style={w1170px}>
                        <div>
                        <div className="review" style={reviewStyle}>
                            <div className="review-title content-editable">Cuddly yet very strong</div>
                            <div className="review-text content-editable">I had a puppy that really liked to chew on things when I got this plushie. I loved plushies and this was an addition to my vast collection. One day, my puppy (pudding) got into my room and saw the plethora of plushies on my bed and went to town on my pride and joy. When I got back from school, I came to a room full of ripped up plushies and an ungodly amount of stuffing. I was devastated and in hopes that there was anything salvageable, I dug through the carnage. Deep in the pile of corpses, I pulled out this exact plushie untouched and unharmed. To this day, it is my favorite in my new collection. 10/10 would buy again.</div>
                            <div className="review-stars">
                            <svg className="nc-icon glyph icon-star " xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16">
                         
                                <path fill="rgb( var(--main-bg-color) )" d="M15.144,5.438l-4.316-0.627L8.897,0.9c-0.338-0.683-1.456-0.683-1.794,0l-1.93,3.911L0.856,5.438
                                C0.039,5.557-0.292,6.565,0.302,7.145l3.124,3.044l-0.737,4.299c-0.139,0.814,0.717,1.439,1.451,1.054L8,13.513l3.861,2.03
                                c0.728,0.381,1.591-0.234,1.451-1.054l-0.737-4.299l3.124-3.044C16.292,6.565,15.961,5.557,15.144,5.438z"></path>
                               
                            </svg>
                            <svg className="nc-icon glyph icon-star " xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16">
                       
                                <path fill="rgb( var(--main-bg-color) )" d="M15.144,5.438l-4.316-0.627L8.897,0.9c-0.338-0.683-1.456-0.683-1.794,0l-1.93,3.911L0.856,5.438
                                C0.039,5.557-0.292,6.565,0.302,7.145l3.124,3.044l-0.737,4.299c-0.139,0.814,0.717,1.439,1.451,1.054L8,13.513l3.861,2.03
                                c0.728,0.381,1.591-0.234,1.451-1.054l-0.737-4.299l3.124-3.044C16.292,6.565,15.961,5.557,15.144,5.438z"></path>
                           
                            </svg>
                            <svg className="nc-icon glyph icon-star " xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16">
                           
                                <path fill="rgb( var(--main-bg-color) )" d="M15.144,5.438l-4.316-0.627L8.897,0.9c-0.338-0.683-1.456-0.683-1.794,0l-1.93,3.911L0.856,5.438
                                C0.039,5.557-0.292,6.565,0.302,7.145l3.124,3.044l-0.737,4.299c-0.139,0.814,0.717,1.439,1.451,1.054L8,13.513l3.861,2.03
                                c0.728,0.381,1.591-0.234,1.451-1.054l-0.737-4.299l3.124-3.044C16.292,6.565,15.961,5.557,15.144,5.438z"></path>
                            
                            </svg>
                            <svg className="nc-icon glyph icon-star " xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16">
                        
                                <path fill="rgb( var(--main-bg-color) )" d="M15.144,5.438l-4.316-0.627L8.897,0.9c-0.338-0.683-1.456-0.683-1.794,0l-1.93,3.911L0.856,5.438
                                C0.039,5.557-0.292,6.565,0.302,7.145l3.124,3.044l-0.737,4.299c-0.139,0.814,0.717,1.439,1.451,1.054L8,13.513l3.861,2.03
                                c0.728,0.381,1.591-0.234,1.451-1.054l-0.737-4.299l3.124-3.044C16.292,6.565,15.961,5.557,15.144,5.438z"></path>
                              
                            </svg>
                            <svg className="nc-icon glyph icon-star " xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16">
                          
                                <path fill="rgb( var(--main-bg-color) )" d="M15.144,5.438l-4.316-0.627L8.897,0.9c-0.338-0.683-1.456-0.683-1.794,0l-1.93,3.911L0.856,5.438
                                C0.039,5.557-0.292,6.565,0.302,7.145l3.124,3.044l-0.737,4.299c-0.139,0.814,0.717,1.439,1.451,1.054L8,13.513l3.861,2.03
                                c0.728,0.381,1.591-0.234,1.451-1.054l-0.737-4.299l3.124-3.044C16.292,6.565,15.961,5.557,15.144,5.438z"></path>
                                
                            </svg>
                            </div>
                            <div className="review-author content-editable">Brandon J.</div>
                        </div>
                        </div>
                    </div>
                    <div className="slick-slide" data-slick-index="2" aria-hidden="true" tabindex="-1" role="tabpanel" id="slick-slide12" style={w1170px}>
                        <div>
                        <div className="review" style={reviewStyle}>
                            <div className="review-title content-editable">Pusheen Took Over My Kitchen</div>
                            <div className="review-text content-editable">My first&nbsp; Pusheen Plush With Donut &nbsp;was so cute I had to get this second friend for her.Pusheen has already made the kitchen her territory. She loves reading our cookbooks [see photo], which effectively are now her cookbooks, because she won't let us go near them. She brightens up the kitchen, she brightens up my little niece's face when she sees her, and she'll brighten up your life.Build quality of the plush is good. Pusheen's figure may be out of shape when unpacked so some careful adjusting of the stuffing may be required. This purchase has added smiles to our home and the guests that visit; I'm sure she'll do the same for yours. Recommended.*** TIP ***Push the bottom upward so that you can get a flatter bottom, this also helps fill out the rest of the plush.</div>
                            <div className="review-stars">
                            <svg className="nc-icon glyph icon-star " xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16">
                        
                                <path fill="rgb( var(--main-bg-color) )" d="M15.144,5.438l-4.316-0.627L8.897,0.9c-0.338-0.683-1.456-0.683-1.794,0l-1.93,3.911L0.856,5.438
                                C0.039,5.557-0.292,6.565,0.302,7.145l3.124,3.044l-0.737,4.299c-0.139,0.814,0.717,1.439,1.451,1.054L8,13.513l3.861,2.03
                                c0.728,0.381,1.591-0.234,1.451-1.054l-0.737-4.299l3.124-3.044C16.292,6.565,15.961,5.557,15.144,5.438z"></path>
                            
                            </svg>
                            <svg className="nc-icon glyph icon-star " xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16">
                          
                                <path fill="rgb( var(--main-bg-color) )" d="M15.144,5.438l-4.316-0.627L8.897,0.9c-0.338-0.683-1.456-0.683-1.794,0l-1.93,3.911L0.856,5.438
                                C0.039,5.557-0.292,6.565,0.302,7.145l3.124,3.044l-0.737,4.299c-0.139,0.814,0.717,1.439,1.451,1.054L8,13.513l3.861,2.03
                                c0.728,0.381,1.591-0.234,1.451-1.054l-0.737-4.299l3.124-3.044C16.292,6.565,15.961,5.557,15.144,5.438z"></path>
                               
                            </svg>
                            <svg className="nc-icon glyph icon-star " xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16">
                           
                                <path fill="rgb( var(--main-bg-color) )" d="M15.144,5.438l-4.316-0.627L8.897,0.9c-0.338-0.683-1.456-0.683-1.794,0l-1.93,3.911L0.856,5.438
                                C0.039,5.557-0.292,6.565,0.302,7.145l3.124,3.044l-0.737,4.299c-0.139,0.814,0.717,1.439,1.451,1.054L8,13.513l3.861,2.03
                                c0.728,0.381,1.591-0.234,1.451-1.054l-0.737-4.299l3.124-3.044C16.292,6.565,15.961,5.557,15.144,5.438z"></path>
                            
                            </svg>
                            <svg className="nc-icon glyph icon-star " xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16">
                      
                                <path fill="rgb( var(--main-bg-color) )" d="M15.144,5.438l-4.316-0.627L8.897,0.9c-0.338-0.683-1.456-0.683-1.794,0l-1.93,3.911L0.856,5.438
                                C0.039,5.557-0.292,6.565,0.302,7.145l3.124,3.044l-0.737,4.299c-0.139,0.814,0.717,1.439,1.451,1.054L8,13.513l3.861,2.03
                                c0.728,0.381,1.591-0.234,1.451-1.054l-0.737-4.299l3.124-3.044C16.292,6.565,15.961,5.557,15.144,5.438z"></path>
                               
                            </svg>
                            <svg className="nc-icon glyph icon-star " xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16">
                            
                                <path fill="rgb( var(--main-bg-color) )" d="M15.144,5.438l-4.316-0.627L8.897,0.9c-0.338-0.683-1.456-0.683-1.794,0l-1.93,3.911L0.856,5.438
                                C0.039,5.557-0.292,6.565,0.302,7.145l3.124,3.044l-0.737,4.299c-0.139,0.814,0.717,1.439,1.451,1.054L8,13.513l3.861,2.03
                                c0.728,0.381,1.591-0.234,1.451-1.054l-0.737-4.299l3.124-3.044C16.292,6.565,15.961,5.557,15.144,5.438z"></path>
                            
                            </svg>
                            </div>
                            <div className="review-author content-editable">benjamin bannister</div>
                        </div>
                        </div>
                    </div>
                    <div className="slick-slide" data-slick-index="3" aria-hidden="true" tabindex="-1" role="tabpanel" id="slick-slide13" style={w1170px}>
                        <div>
                        <div className="review" style={reviewStyle}>
                            <div className="review-title content-editable">I am happy and love my little kitten</div>
                            <div className="review-text content-editable">Many people have warned of getting a fake Pusheen--so before I wrote this review, I double checked several things on my recent purchase of Pusheen from Amazon.com, and report that I HAVE A GENUINE PUSHEEN. Don't be afraid to buy her, she is real. She has all the right stuff, tail, back stripes and hang tag! I am happy and love my little kitten. She is right and very soft. Makes a wonderful present for a lucky child or adult who collects stuffed toys. I just love cats, and have always had at least one cat around the house. I have had several plush toy cats but this one is sooooo soft!</div>
                            <div className="review-stars">
                            <svg className="nc-icon glyph icon-star " xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16">
                                
                                <path fill="rgb( var(--main-bg-color) )" d="M15.144,5.438l-4.316-0.627L8.897,0.9c-0.338-0.683-1.456-0.683-1.794,0l-1.93,3.911L0.856,5.438
                                C0.039,5.557-0.292,6.565,0.302,7.145l3.124,3.044l-0.737,4.299c-0.139,0.814,0.717,1.439,1.451,1.054L8,13.513l3.861,2.03
                                c0.728,0.381,1.591-0.234,1.451-1.054l-0.737-4.299l3.124-3.044C16.292,6.565,15.961,5.557,15.144,5.438z"></path>
                             
                            </svg>
                            <svg className="nc-icon glyph icon-star " xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16">
                              
                                <path fill="rgb( var(--main-bg-color) )" d="M15.144,5.438l-4.316-0.627L8.897,0.9c-0.338-0.683-1.456-0.683-1.794,0l-1.93,3.911L0.856,5.438
                                C0.039,5.557-0.292,6.565,0.302,7.145l3.124,3.044l-0.737,4.299c-0.139,0.814,0.717,1.439,1.451,1.054L8,13.513l3.861,2.03
                                c0.728,0.381,1.591-0.234,1.451-1.054l-0.737-4.299l3.124-3.044C16.292,6.565,15.961,5.557,15.144,5.438z"></path>
                            
                            </svg>
                            <svg className="nc-icon glyph icon-star " xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16">
                         
                                <path fill="rgb( var(--main-bg-color) )" d="M15.144,5.438l-4.316-0.627L8.897,0.9c-0.338-0.683-1.456-0.683-1.794,0l-1.93,3.911L0.856,5.438
                                C0.039,5.557-0.292,6.565,0.302,7.145l3.124,3.044l-0.737,4.299c-0.139,0.814,0.717,1.439,1.451,1.054L8,13.513l3.861,2.03
                                c0.728,0.381,1.591-0.234,1.451-1.054l-0.737-4.299l3.124-3.044C16.292,6.565,15.961,5.557,15.144,5.438z"></path>
                               
                            </svg>
                            <svg className="nc-icon glyph icon-star " xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16">
                         
                                <path fill="rgb( var(--main-bg-color) )" d="M15.144,5.438l-4.316-0.627L8.897,0.9c-0.338-0.683-1.456-0.683-1.794,0l-1.93,3.911L0.856,5.438
                                C0.039,5.557-0.292,6.565,0.302,7.145l3.124,3.044l-0.737,4.299c-0.139,0.814,0.717,1.439,1.451,1.054L8,13.513l3.861,2.03
                                c0.728,0.381,1.591-0.234,1.451-1.054l-0.737-4.299l3.124-3.044C16.292,6.565,15.961,5.557,15.144,5.438z"></path>
                              
                            </svg>
                            <svg className="nc-icon glyph icon-star " xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16">
                              
                                <path fill="rgb( var(--main-bg-color) )" d="M15.144,5.438l-4.316-0.627L8.897,0.9c-0.338-0.683-1.456-0.683-1.794,0l-1.93,3.911L0.856,5.438
                                C0.039,5.557-0.292,6.565,0.302,7.145l3.124,3.044l-0.737,4.299c-0.139,0.814,0.717,1.439,1.451,1.054L8,13.513l3.861,2.03
                                c0.728,0.381,1.591-0.234,1.451-1.054l-0.737-4.299l3.124-3.044C16.292,6.565,15.961,5.557,15.144,5.438z"></path>
                           
                            </svg>
                            </div>
                            <div className="review-author content-editable">Andrea H</div>
                        </div>
                        </div>
                    </div>
                    <div className="slick-slide" data-slick-index="4" aria-hidden="true" tabindex="-1" role="tabpanel" id="slick-slide14" style={w1170px}>
                        <div>
                        <div className="review" style={reviewStyle}>
                            <div className="review-title content-editable">Girlfriend loves it!</div>
                            <div className="review-text content-editable">Was an Xmas present for my Girlfriend. She loves the Pusheen brand and was very excited to add this to her collection!</div>
                            <div className="review-stars">
                            <svg className="nc-icon glyph icon-star " xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16">
                          
                                <path fill="rgb( var(--main-bg-color) )" d="M15.144,5.438l-4.316-0.627L8.897,0.9c-0.338-0.683-1.456-0.683-1.794,0l-1.93,3.911L0.856,5.438
                                C0.039,5.557-0.292,6.565,0.302,7.145l3.124,3.044l-0.737,4.299c-0.139,0.814,0.717,1.439,1.451,1.054L8,13.513l3.861,2.03
                                c0.728,0.381,1.591-0.234,1.451-1.054l-0.737-4.299l3.124-3.044C16.292,6.565,15.961,5.557,15.144,5.438z"></path>
                        
                            </svg>
                            <svg className="nc-icon glyph icon-star " xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16">
                            
                                <path fill="rgb( var(--main-bg-color) )" d="M15.144,5.438l-4.316-0.627L8.897,0.9c-0.338-0.683-1.456-0.683-1.794,0l-1.93,3.911L0.856,5.438
                                C0.039,5.557-0.292,6.565,0.302,7.145l3.124,3.044l-0.737,4.299c-0.139,0.814,0.717,1.439,1.451,1.054L8,13.513l3.861,2.03
                                c0.728,0.381,1.591-0.234,1.451-1.054l-0.737-4.299l3.124-3.044C16.292,6.565,15.961,5.557,15.144,5.438z"></path>
                            
                            </svg>
                            <svg className="nc-icon glyph icon-star " xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16">
                               
                                <path fill="rgb( var(--main-bg-color) )" d="M15.144,5.438l-4.316-0.627L8.897,0.9c-0.338-0.683-1.456-0.683-1.794,0l-1.93,3.911L0.856,5.438
                                C0.039,5.557-0.292,6.565,0.302,7.145l3.124,3.044l-0.737,4.299c-0.139,0.814,0.717,1.439,1.451,1.054L8,13.513l3.861,2.03
                                c0.728,0.381,1.591-0.234,1.451-1.054l-0.737-4.299l3.124-3.044C16.292,6.565,15.961,5.557,15.144,5.438z"></path>
                         
                            </svg>
                            <svg className="nc-icon glyph icon-star " xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16">
                         
                                <path fill="rgb( var(--main-bg-color) )" d="M15.144,5.438l-4.316-0.627L8.897,0.9c-0.338-0.683-1.456-0.683-1.794,0l-1.93,3.911L0.856,5.438
                                C0.039,5.557-0.292,6.565,0.302,7.145l3.124,3.044l-0.737,4.299c-0.139,0.814,0.717,1.439,1.451,1.054L8,13.513l3.861,2.03
                                c0.728,0.381,1.591-0.234,1.451-1.054l-0.737-4.299l3.124-3.044C16.292,6.565,15.961,5.557,15.144,5.438z"></path>
                              
                            </svg>
                            <svg className="nc-icon glyph icon-star " xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16">
                             
                                <path fill="rgb( var(--main-bg-color) )" d="M15.144,5.438l-4.316-0.627L8.897,0.9c-0.338-0.683-1.456-0.683-1.794,0l-1.93,3.911L0.856,5.438
                                C0.039,5.557-0.292,6.565,0.302,7.145l3.124,3.044l-0.737,4.299c-0.139,0.814,0.717,1.439,1.451,1.054L8,13.513l3.861,2.03
                                c0.728,0.381,1.591-0.234,1.451-1.054l-0.737-4.299l3.124-3.044C16.292,6.565,15.961,5.557,15.144,5.438z"></path>
                               
                            </svg>
                            </div>
                            <div className="review-author content-editable">Cameron Dowie</div>
                        </div>
                        </div>
                    </div>
                    <div className="slick-slide" data-slick-index="5" aria-hidden="true" tabindex="-1" role="tabpanel" id="slick-slide15" style={w1170px}>
                        <div>
                        <div className="review" style={reviewStyle}>
                            <div className="review-title content-editable">Great product and Great price</div>
                            <div className="review-text content-editable">My son is over the moon since arrived goes to bed with him every night. Its a great size made well and worth the money.</div>
                            <div className="review-stars">
                            <svg className="nc-icon glyph icon-star " xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16">
                             
                                <path fill="rgb( var(--main-bg-color) )" d="M15.144,5.438l-4.316-0.627L8.897,0.9c-0.338-0.683-1.456-0.683-1.794,0l-1.93,3.911L0.856,5.438
                                C0.039,5.557-0.292,6.565,0.302,7.145l3.124,3.044l-0.737,4.299c-0.139,0.814,0.717,1.439,1.451,1.054L8,13.513l3.861,2.03
                                c0.728,0.381,1.591-0.234,1.451-1.054l-0.737-4.299l3.124-3.044C16.292,6.565,15.961,5.557,15.144,5.438z"></path>
                           
                            </svg>
                            <svg className="nc-icon glyph icon-star " xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16">
                                
                                <path fill="rgb( var(--main-bg-color) )" d="M15.144,5.438l-4.316-0.627L8.897,0.9c-0.338-0.683-1.456-0.683-1.794,0l-1.93,3.911L0.856,5.438
                                C0.039,5.557-0.292,6.565,0.302,7.145l3.124,3.044l-0.737,4.299c-0.139,0.814,0.717,1.439,1.451,1.054L8,13.513l3.861,2.03
                                c0.728,0.381,1.591-0.234,1.451-1.054l-0.737-4.299l3.124-3.044C16.292,6.565,15.961,5.557,15.144,5.438z"></path>
                             
                            </svg>
                            <svg className="nc-icon glyph icon-star " xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16">
                              
                                <path fill="rgb( var(--main-bg-color) )" d="M15.144,5.438l-4.316-0.627L8.897,0.9c-0.338-0.683-1.456-0.683-1.794,0l-1.93,3.911L0.856,5.438
                                C0.039,5.557-0.292,6.565,0.302,7.145l3.124,3.044l-0.737,4.299c-0.139,0.814,0.717,1.439,1.451,1.054L8,13.513l3.861,2.03
                                c0.728,0.381,1.591-0.234,1.451-1.054l-0.737-4.299l3.124-3.044C16.292,6.565,15.961,5.557,15.144,5.438z"></path>
                                
                            </svg>
                            <svg className="nc-icon glyph icon-star " xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16">
                             
                                <path fill="rgb( var(--main-bg-color) )" d="M15.144,5.438l-4.316-0.627L8.897,0.9c-0.338-0.683-1.456-0.683-1.794,0l-1.93,3.911L0.856,5.438
                                C0.039,5.557-0.292,6.565,0.302,7.145l3.124,3.044l-0.737,4.299c-0.139,0.814,0.717,1.439,1.451,1.054L8,13.513l3.861,2.03
                                c0.728,0.381,1.591-0.234,1.451-1.054l-0.737-4.299l3.124-3.044C16.292,6.565,15.961,5.557,15.144,5.438z"></path>
                               
                            </svg>
                            <svg className="nc-icon glyph icon-star " xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16">
                                
                                <path fill="rgb( var(--main-bg-color) )" d="M15.144,5.438l-4.316-0.627L8.897,0.9c-0.338-0.683-1.456-0.683-1.794,0l-1.93,3.911L0.856,5.438
                                C0.039,5.557-0.292,6.565,0.302,7.145l3.124,3.044l-0.737,4.299c-0.139,0.814,0.717,1.439,1.451,1.054L8,13.513l3.861,2.03
                                c0.728,0.381,1.591-0.234,1.451-1.054l-0.737-4.299l3.124-3.044C16.292,6.565,15.961,5.557,15.144,5.438z"></path>
                              
                            </svg>
                            </div>
                            <div className="review-author content-editable">Nicola Bradley</div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <ul className="slick-dots" role="tablist">
                    <li className="slick-active" role="presentation">
                    <button type="button" role="tab" id="slick-slide-control10" aria-controls="slick-slide10" aria-label="1 of 6" tabindex="0" aria-selected="true">1</button>
                    </li>
                    <li role="presentation">
                    <button type="button" role="tab" id="slick-slide-control11" aria-controls="slick-slide11" aria-label="2 of 6" tabindex="-1">2</button>
                    </li>
                    <li role="presentation">
                    <button type="button" role="tab" id="slick-slide-control12" aria-controls="slick-slide12" aria-label="3 of 6" tabindex="-1">3</button>
                    </li>
                    <li role="presentation">
                    <button type="button" role="tab" id="slick-slide-control13" aria-controls="slick-slide13" aria-label="4 of 6" tabindex="-1">4</button>
                    </li>
                    <li role="presentation">
                    <button type="button" role="tab" id="slick-slide-control14" aria-controls="slick-slide14" aria-label="5 of 6" tabindex="-1">5</button>
                    </li>
                    <li role="presentation">
                    <button type="button" role="tab" id="slick-slide-control15" aria-controls="slick-slide15" aria-label="6 of 6" tabindex="-1">6</button>
                    </li>
                </ul>
                </div>
                <div id="review-arrows">
                <span className="review-arrow slick-arrow slick-disabled" id="review-nav-left" aria-disabled="true">
                    <svg className="nc-icon glyph icon-right3 " xmlns="http://www.w3.org/2000/svg" width="16" height="34" viewBox="0 0 16 34">
                    <path fill="none" fill-rule="nonzero" stroke="rgb( var(--main-bg-color) )" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1l14 16L1 33"></path>
                    </svg>
                </span>
                <span className="review-arrow slick-arrow" id="review-nav-right" aria-disabled="false" >
                    <svg className="nc-icon glyph icon-right3 " xmlns="http://www.w3.org/2000/svg" width="16" height="34" viewBox="0 0 16 34">
                    <path fill="none" fill-rule="nonzero" stroke="rgb( var(--main-bg-color) )" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1l14 16L1 33"></path>
                    </svg>
                </span>
                </div>
            </div>
        </section>
        <section id="faq-div">
            <div className="wrapper">
                <svg className="nc-icon glyph icon-faq2 section-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="rgb( var(--main-bg-color) )" fill-rule="evenodd" d="M22.391 5.976a11.95 11.95 0 0 0-4.367-4.367C16.185.536 14.178 0 12 0 9.823 0 7.815.536 5.977 1.61A11.947 11.947 0 0 0 1.61 5.975C.536 7.816 0 9.823 0 12s.537 4.185 1.61 6.023a11.95 11.95 0 0 0 4.367 4.368C7.815 23.464 9.823 24 12 24c2.177 0 4.185-.536 6.024-1.61a11.947 11.947 0 0 0 4.367-4.367C23.464 16.185 24 14.177 24 12c0-2.177-.536-4.185-1.609-6.024zM14.001 19.5a.487.487 0 0 1-.141.36.485.485 0 0 1-.36.14h-3a.487.487 0 0 1-.359-.14.486.486 0 0 1-.14-.36v-3c0-.146.046-.266.14-.36a.488.488 0 0 1 .36-.14h3c.146 0 .265.047.359.14.093.094.14.214.14.36v3zm3.804-9.234c-.13.385-.276.7-.437.945a3.62 3.62 0 0 1-.696.75 6.52 6.52 0 0 1-.719.547c-.177.11-.432.258-.765.445a2.632 2.632 0 0 0-.851.774c-.224.317-.336.575-.336.773a.487.487 0 0 1-.141.36.486.486 0 0 1-.36.14h-3a.487.487 0 0 1-.359-.14.486.486 0 0 1-.14-.36v-.563c0-.698.273-1.352.82-1.96.547-.61 1.148-1.06 1.805-1.352.5-.23.854-.464 1.062-.703.209-.24.313-.558.313-.954 0-.344-.196-.65-.586-.922a2.288 2.288 0 0 0-1.336-.406c-.542 0-.99.125-1.344.375-.344.25-.792.73-1.344 1.438a.46.46 0 0 1-.39.187.442.442 0 0 1-.297-.093L6.64 7.984c-.24-.187-.28-.406-.125-.656C7.85 5.109 9.782 4 12.313 4c.907 0 1.792.213 2.657.64a5.918 5.918 0 0 1 2.164 1.813C17.71 7.234 18 8.083 18 9c0 .458-.066.88-.196 1.266z"></path>
                </svg>
                <div className="headline content-editable" id="faq-headline">Questions?</div>
                <div id="faqs">
                <div className="question open">
                    <svg className="nc-icon glyph icon-dropdown " xmlns="http://www.w3.org/2000/svg" width="20" height="10" viewBox="0 0 20 10">
                    <g fill="none" fill-rule="nonzero">
                        <path d="M-2 17h24V-7H-2z"></path>
                        <path stroke="rgb( var(--main-bg-color) )" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 9l9-8 9 8"></path>
                    </g>
                    </svg>
                    <div className="question-title content-editable content-editable-faq">Why are you running this promotion?</div>
                </div>
                <div className="question">
                    <svg className="nc-icon glyph icon-dropdown " xmlns="http://www.w3.org/2000/svg" width="20" height="10" viewBox="0 0 20 10">
                    <g fill="none" fill-rule="nonzero">
                        <path d="M-2 17h24V-7H-2z"></path>
                        <path stroke="rgb( var(--main-bg-color) )" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 9l9-8 9 8"></path>
                    </g>
                    </svg>
                    <div className="question-title content-editable content-editable-faq">Can I trust you?</div>
                </div>
                <div className="question">
                    <svg className="nc-icon glyph icon-dropdown " xmlns="http://www.w3.org/2000/svg" width="20" height="10" viewBox="0 0 20 10">
                    <g fill="none" fill-rule="nonzero">
                        <path d="M-2 17h24V-7H-2z"></path>
                        <path stroke="rgb( var(--main-bg-color) )" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 9l9-8 9 8"></path>
                    </g>
                    </svg>
                    <div className="question-title content-editable content-editable-faq">How can I use my coupon on Amazon?</div>
                </div>
                <div className="question">
                    <svg className="nc-icon glyph icon-dropdown " xmlns="http://www.w3.org/2000/svg" width="20" height="10" viewBox="0 0 20 10">
                    <g fill="none" fill-rule="nonzero">
                        <path d="M-2 17h24V-7H-2z"></path>
                        <path stroke="rgb( var(--main-bg-color) )" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 9l9-8 9 8"></path>
                    </g>
                    </svg>
                    <div className="question-title content-editable content-editable-faq">Does this include free shipping?</div>
                    </div>
                </div>
            </div>
        </section>
        <section class="call-to-action">
            <div class="wrapper">
                <div class="product-cta-percent-off">
                <div class="product-cta-percent-off-inner percent">
                    <span class="cta-percent-off-value">96%</span>
                    <span class="cta-percent-off-text">off</span>
                </div>
                </div>
                <div class="call-to-action-text headline content-editable">What Are You Waiting For?</div>
                <button type="button" class="button cta-button">Claim Coupon</button>
            </div>
        </section>
    </Layout>
  );
}
export default  FrontPage;