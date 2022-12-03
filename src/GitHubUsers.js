import { useGitHubUsers } from "./useGitHubUsers";

export function GitHubUsers({ username }) {
  const { user, error, isLoading, onRefresh } = useGitHubUsers(username);

  return (
    <div>
      <button onClick={onRefresh}>Refresh</button>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>An error has occurred</h3>}
      {user && <li>This user exist - {user.login}</li>}
    </div>
  );
}
