import React from 'react';
import Trend from './trending.json';
import Card from '../cards/card';

function trending() {
    const dataArray = Object.values(Trend);
    return (
        <>
            <div>
                <h1 className='mt-4  text-center light'>Trending!</h1>
            </div>
            <Card data = {dataArray}/>
        </>
    )
}

export default trending
