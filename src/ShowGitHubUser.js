import { useParams } from "react-router-dom";
import { GitHubUser } from "./GitHubUser";

const ShowGitHubUser = () => {
  const { username } = useParams();
  console.log(username);

  return (
    <div>
      <h1>
        <GitHubUser username={username} />
      </h1>
    </div>
  );
};

export default ShowGitHubUser;
