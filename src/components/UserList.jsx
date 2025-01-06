import React, { useEffect, useState } from 'react';
import { getUsers } from '../../utils/api.js';
import { Link } from 'react-router-dom';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Select a user to chat with:</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            <Link to={`/chat/${user._id}`}>{user.username}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;