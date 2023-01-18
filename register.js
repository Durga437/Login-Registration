
import './register.css';

function Register()
    {
        return(
<div class="login-box">
  <h2>REGISTER</h2>
  <form name='form1' action="register.php" method="POST">
    <div class="user-box">
      <input type="text" name="uname" required=""/>
      <label>Username</label>
    </div>
    <div class="user-box">
      <input type="text" name="email" required=""/>
      <label>Email</label>
    </div>
    <div class="user-box">
      <input type="password" name="pswd1" required=""/>
      <label>Password</label>
    </div>
    <div class="user-box">
      <input type="password" name="pswd2" required=""/>
      <label>Confirm Password</label>
    </div>
    
    <a href="/login">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Signup
    </a>
  </form>
</div>
);
    }
export default Register;
    