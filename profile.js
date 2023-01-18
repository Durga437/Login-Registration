
import './profile.css';

function Profile()
    {
        return(
<div class="login-box">
  <h2>PROFILE</h2>
  <form>
    <div class="user-box">
      <input type="text" name="" required=""/>
      <label>Name</label>
    </div>
    <div class="user-box">
      <input type="text" name="" required=""/>
      <label>Username</label>
    </div>
    <div class="user-box">
      <input type="password" name="" required=""/>
      <label>Password</label>
    </div>
    
    <div class="user-box">
      <input type="text" name="" required=""/>
      <label>Place</label>
    </div>
    <div class="user-box">
      <input type="text" name="" required=""/>
      <label>DOB</label>
    </div>
    <div class="user-box">
      <input type="text" name="" required=""/>
      <label>Number</label>
    </div>
    <a href="/login">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </a>
  </form>
</div>
);
    }
export default Profile;
    