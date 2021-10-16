import React from 'react';

// import backgroundimg from '../../Images/bannerbackground.png';
import './Background.css';

const Background = () => {
    return (
        <div className="background-img">
            {/* <img className="w-100" src={backgroundimg} alt="" /> */}
            <h1> Best food waiting for mustafiz belly</h1>
            <input type="text" />
            <button className="btn-danger">Search</button>

        </div>
    );
};

export default Background;