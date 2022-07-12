import React from "react";

const Pagination = ({ prev, next ,onPrevious, onNext })=>{

    const handlePrevious = ()=>{
        onPrevious();
    };

    const handleNext = () => {
        onNext();
    };


    return(
            <ul className="pagination">
                {
                    prev ? 
                    (<li className="paginationli">
                    <button className="pagination__button" onClick={handlePrevious}>
                      Previous
                    </button>
                    </li>)
                    : null
                }
                {
                    next ? (
                    <li className="pagination__li">
                    <button className="pagination__button" onClick={handleNext}>
                        Next
                    </button>
                    </li> )
                    : null
                }
            </ul>
    );
};


export default Pagination;