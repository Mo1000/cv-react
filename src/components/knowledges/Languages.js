import React, {Component} from 'react';
import ProgressBar from "./ProgressBar";

class Languages extends Component {
    state={
        languages:[
            {id:1 ,value: "Javascript" , xp:1},
            {id:2 ,value: "Java" , xp:2},
            {id:3 ,value: "CSS" , xp:0.7},
            {id:4 ,value: "C" , xp:1}
        ],
        framework:[
            {id:1 ,value: "React" , xp:1.1},
            {id:2 ,value: "Bootstrap" , xp:2},
            {id:3 ,value: "Express" , xp:0.7},
            {id:4 ,value: "Springboot" , xp:0.4},
            {id:5 ,value: "php" , xp:0.8}
        ]
    }
    render() {
        /**Donc on ecrit juste languages ou framework que d'ecrire
         * this state.languages */
        let {languages , framework } = this.state;
        return (
            <div className="languagesFrameworks">
                <ProgressBar
                    contenue={languages}
                    className="languagesDisplay"
                     title="Languages"
                />

                <ProgressBar
                    contenue={framework}
                    className="frameworksDisplay"
                    title="Framework & bibliothèque"
                />


            </div>
        );
    }
}

export default Languages;
