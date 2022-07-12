import React from "react";


const Categories = ({onHuman, onAlien }) => {
    
    const handleCategoryHuman = () =>{
        onHuman()
    };

    const handleCategoryAlien = () => {
        onAlien()
    };


    return (
        <section className="categories">
                    <ul className="categories__ul">
                        <li>
                            <button className="categories__button" onClick={handleCategoryHuman}>
                                Human
                            </button>
                        </li>
                        <li>
                            <button className="categories__button" onClick={handleCategoryAlien}>
                                Alien
                            </button>
                        </li>
                    </ul>
        </section>
    );
}

export default Categories;