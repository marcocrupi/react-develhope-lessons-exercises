import { useState } from "react";

export function useGitHubUser() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchGithubUser(username) {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const json = await response.json();

      if(response.status !== 200) {
        setError(new Error())
      } 
      console.log(json);
      setData(json);
    } catch (error) {
      setError(error);
      setData(null);
    } finally {
      setLoading(false);
    }
  }

  // Rimuovo useEffect perché i dati verranno caricati alla
  // pressione di un bottone
  // useEffect(() => {
  //   fetchGithubUser(username);
  // }, [username]);

  return { data, error, loading, onFetchUser: fetchGithubUser };
}
