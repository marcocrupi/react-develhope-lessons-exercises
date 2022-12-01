import { useInput } from "./useInput";

function Login() {
  const { values, onInput } = useInput();

  return (
    <form>
      <input
        type="text"
        name="user"
        placeholder="Username"
        value={values.user}
        onChange={onInput}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={values.password}
        onChange={onInput}
      />
      <button disabled={values.user && values.password ? false : true}>
        Login
      </button>
    </form>
  );
}

export default Login;
