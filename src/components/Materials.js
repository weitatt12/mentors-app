import React from 'react';


const Materials = ({property}) => {
    const {index, title, minutesRead, totalViews} = property;
    return(
        <div id={`card-$(index)`} className="card m-auto" style={{width: 250}}>
            <p className="m-auto">{title}</p>
            <div className="d-flex justify-content-between form-text text-muted mt-3">
                <small>{minutesRead}</small>
                <small>{totalViews}</small>
            </div>
        </div>
    )
}


export default Materials;
