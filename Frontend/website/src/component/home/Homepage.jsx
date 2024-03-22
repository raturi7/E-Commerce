import React, { useState , useEffect} from 'react';
import Home from './home.json';
import './home.css';

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
                    <div className="content">
                        <div className="author">{activeItem.author}</div>
                        <div className="title">{activeItem.title}</div>
                        <div className="topic">{activeItem.topic}</div>
                        <div className="des">{activeItem.description}</div>
                        <div className="buttons">
                            <button>SEE MORE</button>
                            <button>SUBSCRIBE</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="thumbnail">
                <div className="item">
                    <img src={require(`${activeItem.img}`)} alt=" Small" />
                    <div className="content">
                        <div className="title">{activeItem.name}</div>
                        <div className="description">{activeItem.descrip}</div>
                    </div>
                </div>
            </div> */}

            <div className="arrows">
                <button id="prev" onClick={showPrevSlides}></button>
                <button id="next" onClick={showNextSlides}></button>
            </div>

            <div className="time"></div>
        </div>
    );
}

export default Homepage;
