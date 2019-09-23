import React from 'react';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
} from 'reactstrap';
import { Link } from 'react-router-dom'

class Mobile extends React.Component {

    render() {
        return (
            <div>
                <img className="m-auto d-flex col-md-10 col-sm-12 col-xs-12" src="data:image/png;base64,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" alt="futureLab logo" />
                    <h2 className="mb-0 d-flex justify-content-center">Welcome Back</h2>
                    <p className="mt-0 d-flex justify-content-center">Sign in to continue</p>

                <Form className="m-auto col-md-3 col-sm-10 col-xs-12">
                    <FormGroup>
                        <Label className="mt-2" for="email">Email</Label>
                        <Input width="50%" />
                    </FormGroup>

                    <FormGroup>
                        <div className="d-flex flex-row justify-content-between">
                            <Label className="mt-2 d-flex justify-content-between" for="password">Password</Label>
                            <p className="mt-2 mb-0">show</p>
                        </div>
                        <Input width="50%" />
                    </FormGroup>
                    <Button className="col-md-12 col-sm-12 col-xs-12 mt-2" type="submit" color="primary">Login</Button> {' '}
                    <Link to="/">Forget password? </Link>

                    <p className='mb-0 mt-5' >Dont't have an account?</p>
                    <Link to="/">Sign up for an account</Link>
                </Form>
            </div>
        );
    }
}

export default Mobile;