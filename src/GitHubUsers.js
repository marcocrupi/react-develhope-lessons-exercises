import { useGitHubUsers } from "./useGitHubUsers";

export function GitHubUsers({ username }) {
  const { user, error, isLoading } = useGitHubUsers(username);

  return (
    <div>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>An error has occurred</h3>}
      {user && <li>This user exist - {user.login}</li>}
    </div>
  );
}
