import React from 'react';
import './card.css';

function card({ data }) {
    return (
        <>
            <div className="card-container">
                {data.map((item, index) => (
                    <div class="wrapper mt-4 mx-3" key={index}>
                        <div class="overviewInfo" >
                            <div class="productinfo">
                                <div class="productImage">
                                    <img src={item.img} alt="product: ps5 controller image" />
                                </div>
                            </div>
                        </div>

                        <div class="productSpecifications">
                            <h1> {item.name}</h1>
                            <p> {item.descrip} </p>
                            <div class="checkoutButton">
                                <div class="priceTag">
                                    <span>&#8377;</span>{item.price}
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
                ))}
            </div>
        </>
    )
}

export default card
