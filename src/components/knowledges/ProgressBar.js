import React from 'react';

const ProgressBar = (props) => {

    const  languagesvalue =props.contenue.map((item) =>{
        let  xpYears = 2 ;
        let progressBarstyle = item.xp / xpYears *100 +'%';

        return(
            <div key={item.id} className="languagesList">
                <li>{item.value}</li>
                <div className="progressBar"
                     style={{width:progressBarstyle}}></div>
            </div>
        );
    });


    return (
        <div className={props.className}>
          <h3>{props.title}</h3>
            <div className= "years" >
                <span>Années d'experience</span>
                <span> 1 an</span>
                <span> 2 ans</span>
            </div>

            <div>
                {languagesvalue}
            </div>

        </div>
    );
};

export default ProgressBar;
