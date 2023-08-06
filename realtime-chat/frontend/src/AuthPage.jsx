import axios from "axios";

const AuthPage = (props) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const password = e.target[1].value;
    axios
      .post("http://localhost:3001/authenticate", {
        username: username,
      })
      .then((res) => props.onAuth({ ...res.data, secret: password }))
      .catch((err) => console.log("error", err));
  };

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Welcome 👋</div>

        <div className="form-subtitle">Login to get started</div>

        <div className="auth">
          <div className="auth-label">Username</div>
          <input type="text" className="auth-input" name="username" required />
          <div className="auth-label">password</div>
          <input
            type="password"
            className="auth-input"
            name="password"
            required
          />
          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthPage;
