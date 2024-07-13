

const Login = () => {
  return (
    <div className="form-container">
      <form className="form" method="post">
        <p className="form-title">Sign in to your account</p>
        <div className="input-container">
          <input type="email" placeholder="Enter email" name="email" />
          <span></span>
        </div>
        <div className="input-container">
          <input type="password" placeholder="Enter password" name="password" />
        </div>
        <button type="submit" className="submit" name="submit">
          Sign in
        </button>
        <p className="signup-link">
          No account?
          <a href="Registe">Sign up</a>
        </p>
      </form>
      {/* Add API handling here */}
    </div>
  );
};

export default Login;
