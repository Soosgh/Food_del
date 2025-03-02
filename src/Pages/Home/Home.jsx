// Home.jsx
import React, { useState } from 'react';
import Header from '../../Component/Header/Header';
import ExploreMenu from '../../Component/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../Component/FoodDisplay/FoodDisplay';


const Home = () => {
    const [category, setCategory] = useState("All");
    return (
        <div>

            <Header />
            <ExploreMenu category={category} setCategory={setCategory} />
            <FoodDisplay category={category} />Z
        </div>
    );
};

export default Home;  // Make sure there's a 'default' export