import React from "react";

const Characters = ({ characters }) =>{
    return(
                characters.map((item , index)  =>{
                    return(
                        <div key={index} className="column">
                    <div className="card">
                        <img src={item.image} alt="character-img" className="card__img"/>
                        <div className="card__text">
                            <h3 className="card--title">
                                { item.name }
                            </h3>
                            <h4 className="card--species">
                               Species: { item.species}
                            </h4>
                            <p className="card--location">
                               Location: {item.location.name}
                            </p>
                        </div>
                    </div>
                  </div>
                    );
                })
            
    );
};

export default Characters;

