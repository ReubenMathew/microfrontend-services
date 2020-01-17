import React, { useState, useEffect } from "react";

function Users(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUserList();
  }, [props.button]);

  function setUserList() {
    setUsers([...users, { name: props.name, email: props.email }]);
  }

  return (
    <div>
      <p>Users</p>

      <ul>
        {users.map(items => (
          <li>
            First Name:{items.name} Contact:{items.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
