import React from 'react'
import Home from './home.json';
import './home.css'
import img1 from './assets/home/img1.jpg'

function home() {
    const dataArray = Object.values(Home);

  return (
    <>
    {dataArray.map(data=> 
        <div className="carousel" key={data.author}>
        <div className="list">
            <div className="item">
                <img src={img1} alt='Image Big'/>
                <div className="content">
                    <div className="author">{data.author}</div>
                    <div className="title">{data.title}</div>
                    <div className="topic">{data.topic}</div>
                    <div className="des">
                        {data.description}
                    </div>
                    <div className="buttons">
                        <button>SEE MORE</button>
                        <button>SUBSCRIBE</button>
                    </div>
                </div>
            </div>
        </div>

        <div className="thumbnail">
            <div className="item">
                <img src={img1} alt='Image Small'/>
                <div className="content">
                    <div className="title">
                        {data.name}
                    </div>
                    <div className="description">
                        {data.descrip}
                    </div>
                </div>
            </div>
        </div>

        <div className="arrows">
            <button id="prev"></button>
            <button id="next"></button>
        </div>
        
        <div className="time"></div>
    </div>
    )};
    <script src='./script.js'></script>
    </>
  )
}

export default home
