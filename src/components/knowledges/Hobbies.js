import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3> Interet</h3>
            <ul>
                <li className="hobby">
                    <i className="fas fa-running"></i>
                    <span> Course a pieds</span></li>

                <li className="hobby">
                    <i className="fas fa-hiking"></i>
                    <span> Randonnées</span> </li>

                <li className="hobby">
                    <i className="fas fa-seedling"></i>
                    <span> Next</span> </li>

                <li className="hobby">
                    <i className="fab fa-bitcoin"></i>
                    <span>Crypto </span></li>

                <li className="hobby">
                    <i className="fas fa-rocket"></i>
                    <span> Anglais</span> </li>
            </ul>
        </div>
    );
};

export default Hobbies;
