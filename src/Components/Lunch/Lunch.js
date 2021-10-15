import React, { useEffect, useState } from 'react';

const Lunch = () => {
    const [food, setFood] = useState();

    useEffect(() => {
        fetch('./mustafiz-Lunch.json')
            .then(res => res.json())
            .then(data => console.log(data));
        // .then(data=>setFood(data));

    }, [])

    return (
        <div>

        </div>
    );
};

export default Lunch;