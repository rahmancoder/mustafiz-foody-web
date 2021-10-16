import React, { useEffect, useState } from 'react';
import Breakfast from '../Breakfast/Breakfast';
import Dinner from '../Dinner/Dinner';
import Lunch from '../Lunch/Lunch';

const AllFood = () => {

    // state

    //effect

    // button handle


    const [breakfastmy, setBreakfast] = useState({});

    const [displayfood, setDisplayfood] = useState([]);

    useEffect(() => {

        fetch('./mustafiz-breakfast.json')
            .then(res => res.json())
            // .then(data => console.log(data)); // ok
            .then(data => {
                setBreakfast(data);
                setDisplayfood(data);
            });
    }, [])

    const handlebreakfast = () => {
        console.log("this is breakfast");
        console.log(breakfastmy);

        // return setBreakfast;

    }


    return (
        <div className="mt-2 bg-success">

            <button onClick={handlebreakfast} className="mx-2"><span> Breakfast  </span></button>
            <button className="mx-2" ><span> Lunch </span></button>
            <button className="mx-2"><span> Dinner  </span></button>
            {/* <Breakfast></Breakfast>
            <Lunch></Lunch>
            <Dinner></Dinner> */}
            {
                displayfood.map(food =>
                    <Breakfast
                        key={food.index}
                        food={food}
                        handlebreakfast={handlebreakfast}

                    ></Breakfast>
                )
            }

        </div>
    );
};

export default AllFood;