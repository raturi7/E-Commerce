import React, { useState, useEffect } from 'react';
import Home from './home.json';
import './home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Homepage() {
    const [activeIndex, setActiveIndex] = useState(0); // Tracks the index of the active card

    const dataArray = Object.values(Home);

    const showPrevSlides = () => {
        if (activeIndex !== 0) {
            setActiveIndex(activeIndex - 1);
        } else {
            setActiveIndex(dataArray.length - 1);
        }
    };

    const showNextSlides = () => {
        if (activeIndex !== dataArray.length - 1) {
            setActiveIndex(activeIndex + 1);
        } else {
            setActiveIndex(0);
        }
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            showNextSlides(); // Automatically show the next slide
        }, 5000); // Change the interval (in milliseconds) as needed

        return () => clearTimeout(timeout); // Cleanup function
    }, [activeIndex]); // Run the effect whenever activeIndex changes

    console.log(activeIndex);

    const activeItem = dataArray[activeIndex];

    return (
        <div className="carousel">
            <div className="list">
                <div className="item">
                    <img src={require(`${activeItem.img}`)} alt=" Big" />
                    {dataArray.map((item, index) => (
                    <div className={`content ${index === activeIndex ? 'active' : 'inactive'}`} >
                        <div className="author">{item.author}</div>
                        <div className="title">{item.title}</div>
                        <div className="topic">{item.topic}</div>
                        <div className="des">{item.description}</div>
                        <div className="buttons">
                            <button>SEE MORE</button>
                            <button>SUBSCRIBE</button>
                        </div>
                    </div>
                    ))}
                </div>
            </div>

            <div className="thumbnail">
                {dataArray.map((item, index) => (
                    <div key={index} className={`item ${index === activeIndex ? 'active' : 'inactive'}`}>
                        <img src={require(`./assets/home/img${index + 1}.jpg`)} alt={`small ${index + 1}`} />
                        <div className="content">
                            <div className="title">
                                {item.name}
                            </div>
                            <div className="description">
                                {item.descrip}
                            </div>
                        </div>
                    </div>
                ))}
            </div>




            <div className="arrows">
                <button id="prev" onClick={showPrevSlides}><FontAwesomeIcon icon={faArrowLeft} /></button>
                <button id="next" onClick={showNextSlides}><FontAwesomeIcon icon={faArrowRight} /></button>
            </div>

            <div className="time"></div>
        </div>
    );
}

export default Homepage;
