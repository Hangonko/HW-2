import React from "react";

const Child = ({ isUserLoggedIn, users }) => {
  return (
    <div>
      {isUserLoggedIn ? (
        users.length > 0 ? (
          users.map((user) => {
            return (
              <div key={user.id}>
                <p>
                  {user.name} {user.lastName} {user.age}
                </p>
              </div>
            );
          })
        ) : (
          <h1>No users in the server</h1>
        )
      ) : (
        <p>You are not authorized</p>
      )}
    </div>
  );
};

export default Child;
