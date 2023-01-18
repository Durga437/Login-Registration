
import './login.css';

function Login()
    {
        return(
<div class="login-box">
  <h2>LOGIN</h2>
  <form>
  <div class="user-box">
      <input type="text" name="email" required=""/>
      <label>Email</label>
    </div>
    <div class="user-box">
      <input type="password" name="pswd1" required=""/>
      <label>Password</label>
    </div>
    <a href="/profile">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Login
    </a>
  </form>
</div>
);
    }
    export default Login;
    