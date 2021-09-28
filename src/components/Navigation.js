import React from 'react';
import  {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <div className="sidebar">
        <div className="id">
        <div className="idContent">
                <img src="./media/Amos1.jpg" alt="profil-pic"/>
                <h3>Amos Ahounou</h3>
            </div>
        </div>

            <div className="navigation">
                <ul>
                   <li>
                       <NavLink exact to="/" activeClassName="navActive">
                           <i className="fas fa-home"></i>
                           <span>Acceuil</span>
                       </NavLink>
                   </li>
                    <li>
                        <NavLink exact to="/compétences" activeClassName="navActive">
                            <i className="fas fa-mountain"></i>
                            <span>Compétences</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/portofolio" activeClassName="navActive">
                            <i className="fas fa-images"></i>
                            <span>Portofolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/contact" activeClassName="navActive">
                            <i className="fas fa-address-book"></i>
                            <span>Contact</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="socialNetwork">
                <ul>
                    <li>
                        <a href ="https://www.linkedin.com/in/amos-ahounou/"
                        target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </li>

                    <li>
                        <a href ="https://github.com/Mo1000"
                           target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                    </li>
                    <li>
                        <a href ="https://www.twitter.com"
                           target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href ="https://codepen.io/"
                           target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-codepen"></i>
                        </a>
                    </li>
                </ul>
                <div className="signature">
                    <a>FromAmos-2021</a>
                </div>
            </div>
        </div>


    );
};

export default Navigation;
