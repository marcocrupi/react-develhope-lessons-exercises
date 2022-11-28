import React, { useEffect, useState } from "react";

export function GitHubUser({ username }) {
  const [user, setUser] = useState(null);
  const string = "In attesa del server...";

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((fetcheduser) => setUser(fetcheduser));
  }, [username]);

  return <div><h1>{user ? user.login : string}</h1></div>;
}
