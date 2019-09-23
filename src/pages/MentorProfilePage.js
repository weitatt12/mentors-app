import React from 'react';
import {
    Card,
    CardBody,
    CardTitle,
    CardText, 
    CardLink,
} from 'reactstrap';
import Navbar from '../components/Navbar';
import { Progress } from 'react-sweet-progress';
import Progressbar from '../components/Progressbar';


class MentorProfile extends React.Component {
    render() {
        return(
            <>
                <Navbar />
                <Card className="m-auto" style={{width: 250}}>
                    <img className="rounded-circle m-auto" height="200px" src="https://www.bellenglish.com/sites/default/files/public/uploads/Chris_Edgoose.jpg" alt="mentor image" />

                    <CardBody>
                        <CardLink href="#" className="d-flex justify-content-center" >John Smith</CardLink>
                        <CardTitle className="mb-0 d-flex justify-content-center">Teacher</CardTitle>
                        <CardTitle className="d-flex justify-content-center">KDU College</CardTitle>
                    </CardBody>
                </Card>

                <br />
                
                <Card className="m-auto mt-3" style={{width: 250}}>
                    <div className="m-auto">
                        <CardBody>
                            <CardText>Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreet sodales nisi, quis iaculis nulla iaculis vitae. Ut laoreet sodales nisi, quis iaculis nulla iaculis vitae. Ut laoreet sodales nisi, quis iaculis nulla iaculis vitae. Ut laoreet sodales nisi, quis iaculis nulla iaculis vitae. Ut laoreet sodales nisi, quis iaculis nulla iaculis vitae. Ut laoreet sodales nisi, quis iaculis nulla iaculis vitae. Ut laoreet sodales nisi, quis iaculis nulla iaculis vitae.</CardText>
                        </CardBody>
                    </div>
                </Card>

                <br />

                <Card className="m-auto mt-3" style={{width: 250}}>
                    <div className="m-auto">
                        <h3>Math</h3>
                        <Progress percent={80} />
                        {/* <Progressbar /> */}

                        <h3>Science</h3>
                        <Progress percent={20} />
                        {/* <Progressbar /> */}

                        <h3>Add Math</h3>
                        <Progress percent={60} />
                        {/* <Progressbar />                         */}
                    </div>
                </Card>
            </>
        )
    }
}

export default MentorProfile;