import useSWR from "swr";

const fetcher = (url) =>
  fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error("An error occurred while fetching the data.");
    } else return response.json();
  });

export function useGitHubUsers(username) {
  const { data, error } = useSWR(username == null ? console.log("no request") :
    `https://api.github.com/users/${username}`,
    fetcher
  );
  
  return {
    user: data,
    error,
    isLoading: !data && !error,
  };
}
