import React from 'react';
import { Card } from 'react-bootstrap';

const Login = () => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <button className='btn btn-rounded bg-primary text-light'>Sign In With Google</button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Login;