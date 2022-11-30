import React, { useEffect, useState } from "react";
import { GitHubUser } from "./GitHubUser";

export function GitHubUserList({ userList = ["marcocrupi"] }) {
  const [data, setData] = useState({ users: userList, newUser: null });

  useEffect(() => {
    setData((prevData) => ({
      ...prevData,
      users: [...prevData.users, prevData.newUser],
    }));
  }, [data.newUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setData((prevData) => ({
      ...prevData,
      newUser: e.target.elements.userfield.value,
    }));
  };

  return (
    <div>
      <ul>
        {data.users.map(function (item, index) {
          if (item) {
            return (
              <li key={index}>
                <GitHubUser username={item} />
              </li>
            );
          } else return null;
        })}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" name="userfield" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
