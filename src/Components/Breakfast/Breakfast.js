import React from 'react';
import './Breakfast.css'

const Breakfast = (props) => {

    // console.log(props.food);
    const { price, picture, name } = props.food;
    return (
        <div className="mt-5 foodbreakfast">

            <div className="">
                <img src={picture} alt="" />


                <h4>{name}</h4>
                <p>Price: {price}</p>
            </div>



        </div>
    );
};

export default Breakfast;