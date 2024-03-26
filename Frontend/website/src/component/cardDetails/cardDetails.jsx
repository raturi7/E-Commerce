import React, { useState, useEffect } from 'react';
import './cardDetails.css';

function CardDetails() {
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        // Set the first image as active when the component mounts
        setSelectedImage(require("./assets/span1.webp"));
    }, []); // Empty dependency array ensures this effect runs only once after the initial render

    return (
        <div className='card-details'>
            <div className='d-flex'>
                {/* div 1 */}
                <div className='d-grid gap-2 mx-4 spac'>
                    <span onClick={() => setSelectedImage(require("./assets/span1.webp"))} className={selectedImage === require("./assets/span1.webp") ? 'active' : ''}>
                        <img src={require("./assets/span1.webp")} alt="span1" />
                    </span>
                    <span onClick={() => setSelectedImage(require("./assets/span2.webp"))} className={selectedImage === require("./assets/span2.webp") ? 'active' : ''}>
                        <img src={require("./assets/span2.webp")} alt="span2" />
                    </span>
                    <span onClick={() => setSelectedImage(require("./assets/span3.webp"))} className={selectedImage === require("./assets/span3.webp") ? 'active' : ''}>
                        <img src={require("./assets/span3.webp")} alt="span3" />
                    </span>
                    <span onClick={() => setSelectedImage(require("./assets/span4.webp"))} className={selectedImage === require("./assets/span4.webp") ? 'active' : ''}>
                        <img src={require("./assets/span4.webp")} alt="span4" />
                    </span>
                </div>
                {/* div 2 */}
                <div className="container d-flex">
                    <div className='rounded img-cont' style={{ width: '50%', height: '70%' }}>
                        {/* images about the product */}
                        {selectedImage && <img src={selectedImage} alt="selectedImage" style={{ maxWidth: '100%', maxHeight: '100%' }} />}
                    </div>
                    <div style={{ backgroundColor: 'yellow', width: '50%', height: '100vh' }}>
                        {/* content about the product */}
                        <p>content</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardDetails;
