import React from "react";
import Child from "./Child";

const Parrent = () => {
  const users = [
    {
      name: "Giorgi",
      lastName: "Okropiridze",
      age: 20,
      id: 1,
    },
    {
      name: "Nika",
      lastName: "Artilakva",
      age: 22,
      id: 2,
    },
    {
      name: "Saba",
      lastName: "Saganelidze",
      age: 27,
      id: 3,
    },
    {
      name: "Sally",
      lastName: "Chokheli",
      age: 24,
      id: 4,
    },
  ];

  return (
    <React.Fragment>
      <Child users={users} isUserLoggedIn={true} />
    </React.Fragment>
  );
};

export default Parrent;
