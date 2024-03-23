import React from 'react';
import './card.css';

function card() {
    return (
        <>
            <div class="wrapper">
                <div class="overviewInfo">
                    {/* <div class="actions">
                        <div class="backbutton ">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1.02698 11.9929L5.26242 16.2426L6.67902 14.8308L4.85766 13.0033L22.9731 13.0012L22.9728 11.0012L4.85309 11.0033L6.6886 9.17398L5.27677 7.75739L1.02698 11.9929Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </div>
                        <div class="cartbutton neurobutton">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M5.79166 2H1V4H4.2184L6.9872 16.6776H7V17H20V16.7519L22.1932 7.09095L22.5308 6H6.6552L6.08485 3.38852L5.79166 2ZM19.9869 8H7.092L8.62081 15H18.3978L19.9869 8Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M10 22C11.1046 22 12 21.1046 12 20C12 18.8954 11.1046 18 10 18C8.89543 18 8 18.8954 8 20C8 21.1046 8.89543 22 10 22Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M19 20C19 21.1046 18.1046 22 17 22C15.8954 22 15 21.1046 15 20C15 18.8954 15.8954 18 17 18C18.1046 18 19 18.8954 19 20Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </div>
                    </div> */}

                    <div class="productinfo">
                        {/* <div class="grouptext">
                            <h3>PLATFORM</h3>
                            <p>PS5</p>
                        </div>
                        <div class="grouptext">
                            <h3>RELEASE</h3>
                            <p>Fall 2020</p>
                        </div>
                        <div class="grouptext">
                            <h3>PRICE</h3>
                            <p>$50</p>
                        </div> */}


                        <div class="productImage">
                            <img src="https://i.imgur.com/ckSgzLQ.png" alt="product: ps5 controller image"/>
                        </div>

                    </div>

                </div>

                <div class="productSpecifications">
                    <h1> Dual Sense </h1>
                    <p> DualSense also adds a build-in microphone array, which will enable players to easily chat with friends without a headset... </p>

                    {/* <div class="productFeatures">
                        <div class="feature">
                            <div class="featureIcon">
                            </div>
                            <div class="featureText">
                                <p> <strong>Futuristic</strong></p>
                                <p>Design</p>
                            </div>
                        </div>
                        <div class="feature">
                            <div class="featureIcon">
                            </div>
                            <div class="featureText">
                                <p> <strong>Built-in</strong></p>
                                <p>Microphone</p>
                            </div>
                        </div>
                        <div class="feature">
                            <div class="featureIcon">
                            </div>
                            <div class="featureText">
                                <p> <strong>Haptic</strong></p>
                                <p>Feedback</p>
                            </div>
                        </div>
                        <div class="feature">
                            <div class="featureIcon">
                            </div>
                            <div class="featureText">
                                <p> <strong>Fast charge</strong></p>
                                <p>USB-C port</p>
                            </div>
                        </div>
                    </div> */}

                    <div class="checkoutButton">
                        <div class="priceTag">
                            <span>&#8377;</span>1500
                        </div>
                        <button class="preorder">
                            <p>Add To Cart</p>
                            <div class="buttonaction">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default card
