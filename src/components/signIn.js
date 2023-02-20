const SignIn = () => (
  <div>
    <form method="POST">
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" />
      </div>
      <button type="button">Sign in</button>
    </form>
  </div>
);

export default SignIn;
