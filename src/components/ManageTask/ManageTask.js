import React from 'react';
import useUser from '../hooks/useUser';
import ManageAll from '../ManageAll/ManageAll';

const ManageTask = () => { 
    const [users, setUsers] = useUser();

    const handleDelete = id => {
        const proceed = window.confirm('are you Sure?');
        if(proceed){

        }
    }

    return (
        <div>
            <h2>TeamUsers: {users.length}</h2>
            <div className='row gy-5'>
                {
                    users.map(user => <ManageAll
                    key={user._id}
                    user={user}
                    ></ManageAll>)
                }
                
            </div>
        </div>
    );
};

export default ManageTask;