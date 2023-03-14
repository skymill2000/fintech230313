import React, { useState } from "react";

const List = () => {
  const [users, setUsers] = useState([
    { name: "홍길동", age: 12, height: 180 },
    { name: "동", age: 18, height: 180 },
    { name: "길동", age: 16, height: 180 },
  ]);

  return (
    <div>
      {users.map((user) => {
        return (
          <>
            <p>{user.name}님</p>
            <p>{user.age}세</p>
            <p>{user.height}cm</p>
          </>
        );
      })}
    </div>
  );
};

export default List;
