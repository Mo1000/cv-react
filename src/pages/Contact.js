import React from 'react';
import Navigation from "../components/Navigation";
import { CopyToClipboard} from "react-copy-to-clipboard/lib/Component";

/**CopyToClipboard est une bibliothèque qui permet de copier le text
 * ecrit dans la baliser*/
const Contact = () => {
    return (
        <div className="contact">
            <Navigation/>
            <div className="contactContent">
                <div className="header"></div>
                <div className="contactBox">
                    <h1>Contactez-moi</h1>

                    <ul>

                        <li >
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Sousse</span>
                        </li>

                        <li>
                            <i className="fas fa-mobile-alt"></i>
                            <CopyToClipboard text="+21624665193">
                                <span className="clickInput" onClick={
                                    () => {
                                        alert('Téléphone copié !');
                                    }
                                }>
                                    +21624665193</span>
                            </CopyToClipboard>
                        </li>

                        <li>
                            <i className="far fa-envelope"></i>
                            <CopyToClipboard text="amosahounou@gmail.com">
                                <span className="clickInput" onClick={
                                    () => {
                                        alert('E-mail copié !');
                                    }
                                }>
                                    amosahounou@gmail.com</span>
                            </CopyToClipboard>
                        </li>
                    </ul>
                </div>

                <div className="socialNetwork">
                    <ul>
                        <a href="https://www.linkedin.com/in/amos-ahounou/" target="_blanck"
                        rel="noopener noreferrer">
                            <h4>LinkedIn</h4>
                            <i className="fab fa-linkedin"></i>
                        </a>

                        <a href="https://github.com/Mo1000" target="_blanck"
                           rel="noopener noreferrer">
                            <h4>GitHub</h4>
                            <i className="fab fa-github"></i>
                        </a>

                        <a  href ="https://www.twitter.com" target="_blanck"
                           rel="noopener noreferrer">
                            <h4>Twitter</h4>
                            <i className="fab fa-twitter"></i>
                        </a>

                        <a href ="https://codepen.io/" target="_blanck"
                           rel="noopener noreferrer">
                            <h4>CodePen</h4>
                            <i className="fab fa-codepen"></i>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;
