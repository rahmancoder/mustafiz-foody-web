import React from 'react';
import Breakfast from '../Breakfast/Breakfast';
import Dinner from '../Dinner/Dinner';
import Lunch from '../Lunch/Lunch';

const AllFood = () => {
    return (
        <div className="mt-5">

            <span> Breakfast  </span>
            <span>Lunch </span>
            <span>Dinner </span>
            {/* <Breakfast></Breakfast>
            <Lunch></Lunch>
            <Dinner></Dinner> */}

        </div>
    );
};

export default AllFood;