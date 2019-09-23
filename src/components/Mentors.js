import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';


const Mentors = ({property}) => {
    const {index, name, photo, profession, company, lastSessionDate} = property;
    return(
        <div id={`card-$(index)`} className="card m-auto" style={{width: 250}}>
            <img className="rounded-circle m-auto" width="100px" height="100px" src={photo} alt="mentor image"/>
            <Link className="m-auto" to="/mentorprofile">{name}</Link>
            <p className="m-auto">{profession}</p>
            <p className="m-auto">{company}</p>
            <small className="form-text text-muted mt-3">Last session</small>
            <small>{lastSessionDate}</small>
            <Button className="mt-2" color="primary">CREATE APPOINTMENT</Button>
        </div>
    )
}


export default Mentors;