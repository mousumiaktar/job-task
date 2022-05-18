import React from 'react';
import { Card } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    if (error) {
        return (
          <div>
            <p className='text-danger'>Error: {error.message}</p>
          </div>
        );
      }

      if(user){
          navigate('/home');
      }

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <button onClick={ () => signInWithGoogle()} className='btn btn-rounded bg-primary text-light'>Sign In With Google</button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Login;