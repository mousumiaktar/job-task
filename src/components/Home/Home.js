import { useNavigate } from 'react-router-dom';
import useUser from '../hooks/useUser';
import User from '../User/User';

const Home = () => {
    const [users, setUsers] = useUser();
    const navigate = useNavigate();

    const navigateUser= () =>{
        navigate('/addtask')
    }

    return (
        <div>
            <h2>TeamUsers: {users.length}</h2>
            <div className='row gy-5'>
                {
                    users.map(user => <User
                    key={user._id}
                    user={user}
                    ></User>)
                }
            </div>
            <button onClick={() => navigateUser()} className='btn btn-rounded bg-primary text-light mt-5'>Add Task</button>
        </div>
    );
};

export default Home;