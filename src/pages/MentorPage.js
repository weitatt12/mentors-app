import React from 'react';
import {
    Card, 
    CardImg,
    CardBody,
    CardTitle,
} from 'reactstrap';
// import { Link } from 'react-router-dom';
import mentorsData from '../data/mentorsData';
import Mentors from '../components/Mentors';



class Mentor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            properties: mentorsData.properties,
            property: mentorsData.properties[0] 
        }
    }

    // nextProperty = () => {
    //     const newIndex = this.state.property.index+1;
    //     this.setState({
    //         property: mentorsData.properties[newIndex]
    //     })
    // }

    // prevProperty = () => {
    //     const newIndex = this.state.property.index-1;
    //     this.setState({
    //         property: mentorsData.properties[newIndex]
    //     })  
    // }


    render() {
        const {properties, property} = this.state;
        return(
            <>
                {/* Mentor */}
                <h3 className="d-flex justify-content-center mb-0">My Mentos</h3>
                <p className="d-flex justify-content-center">Your recent mentos</p>

                <div className={`cards-slider active-slide-${property.index}`}>
                    <div className="cards-slider-wrapper" style={{display: 'flex', position: 'absolute',
                        'transfrom': `translateX(-${property.index*(100/properties.length)})`,
                        'transition': 'transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955)'
                    }}>
                        {
                            properties.map(property => <Mentors style={{flex: 1}} key={property.id} property={property} />)
                        }
                    </div>
                </div>

                <br />
                <br />
                <br /> 
                <br />
                <br />
                <br /> 
                <br />
                <br />
                <br />
                <br />
                <br />

                {/* learnng materials */}
                <h3 className="d-flex justify-content-center mb-0 mt-5">Learning  materials</h3>
                <p className="d-flex justify-content-center">Check out what's new.</p>             
                <Card className="m-auto" style={{width: 250}}>  
                    <CardImg src="https://media.istockphoto.com/vectors/kids-learning-material-vector-id1064510936" alt="learning material" />
                    <CardBody>
                        <CardTitle className="mb-0">How to learn code</CardTitle>
                        <CardTitle>Future Lab</CardTitle>
                        <div className="d-flex justify-content-between form-text text-muted mt-3">
                            <small>15 minutes read</small>
                            <small>213145 views</small>
                        </div>
                    </CardBody>
                </Card>
            </>
        )
    }
}

export default Mentor;
