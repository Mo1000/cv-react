import React from 'react';
import Navigation from "../components/Navigation";
import Languages from "../components/knowledges/Languages";
import Expereinces from "../components/knowledges/Expereinces";
import OtherSkills from "../components/knowledges/OtherSkills";
import Hobbies from "../components/knowledges/Hobbies";

const Knowledges = () => {
    return (
        <div className="knowledges">
            <Navigation/>
         <div className="knowledgesContent">
             <Languages/>
             <Expereinces/>
             <OtherSkills/>
             <Hobbies/>
         </div>
        </div>
    );
};

export default Knowledges;
