import React from "react";
import "./CatButtons.css"; // Category Button CSS

const CatButtons = ({ getPosts }) => {

    const categoryList = [
        "All",
        "Coding",
        "Education",
        "Fashion",
        "Food",
        "Health",
        "Love",
        "Money",
        "Music",
        "People",
        "Politics",
        "Science",
        "Sports",
        "Technology",
        "TV",
        "Weather"
    ];

    return (

        <nav id="categoryNav" className="navbar navbar-expand-lg">
            <div className="categories">
                {categoryList.map((category) => (
                    <button key={category} onClick={() => getPosts(category)}>{category}</button>
                ))}
            </div>
        </nav>

    ); // End of return()

}; // End of CatButtons()

export default CatButtons;