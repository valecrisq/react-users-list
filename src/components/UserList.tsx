import React, { useState, useEffect, useMemo } from "react";
import UserDetails from "./UserDetails";
import "../styles/UserList.css";
import { User } from "../user";
import { fetchUsers } from "../services/getUserList";

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const data = await fetchUsers();
      setUsers(data);
      setError(null);
    } catch (err) {
      setError((err as Error).message);
    }
  };

  const handleUserClick = (user: User) => {
    setSelectedUser(user);
  };

  const handleGoBack = () => {
    setSelectedUser(null);
  };

  const memoizedUsers = useMemo(() => users, [users]);

  const usersList = memoizedUsers.map((user) => (
    <li
      key={user.id}
      onClick={() => handleUserClick(user)}
      role="button"
      tabIndex={0}
    >
      <h4 data-testid="user-name">{user.name}</h4>
      <p className="user-info">
        Username: <em>{user.username ? user.username : "Not Available"}</em>
      </p>
      <p className="user-info">
        Email: <em>{user.email ? user.email : "Not Available"}</em>
      </p>
      <p className="user-info">
        Phone: <em>{user.phone ? user.phone : "Not Available"}</em>
      </p>
    </li>
  ));

  return (
    <div className="user-list-container">
      {selectedUser ? (
        <div className="user-details">
          <UserDetails user={selectedUser} onGoBack={handleGoBack} />
        </div>
      ) : (
        <>
          {error ? (
            <h4 className="error" role="alert">
              {error}
            </h4>
          ) : (
            <div className="user-list">
              <h2>Users List</h2>
              <ul data-testid="users-list">{usersList}</ul>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default React.memo(UserList);
