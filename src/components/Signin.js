import React from 'react';
import { NavLink } from 'react-router-dom';

class Signin extends React.Component {

    handleSubmit(e) {
        alert("Logged In Succesfully");
        e.preventDefault();
    }
render() {

    return(
        <div>
        <div className="__body">
        <div className="container">
          <div className="container">
            <div className="wrapper">
              <div className="info">
                <h3>Physics Society</h3>
                <p className="lead small">
                  A part of Bhadrak Autonomus College
                </p>
                <ul>
                  <li>Jagannathpur</li>
                  <li>06784-456372</li>
                  <li>bhadrakcollege@hotamil.com</li>
                </ul>
                  <br />
                  <br />
                  <center>
                  <div className="btn-group  text-center" id="btn-grp" role="group" aria-label="">
                    <button className="sign_button"><NavLink to="/">SignUp</NavLink></button>
                    <button className="sign_button"><NavLink to="/sign-in" >SignIn</NavLink> </button>
                  </div>
                  </center>
              </div>
              <div className="contact">
                <h3>Sign In</h3>
                <form action="" onSubmit={this.handleSubmit.bind(this)}>
                  <p>
                    <label htmlFor="">Email</label>
                    <input type="email" name="name" required />
                  </p>
                  <p>
                  <label htmlFor="">Password</label>
                  <input type="password" name="name" required/>
                </p>
                <p></p>
                <p>
                <NavLink to="/forgot" activeClassName="is-active" className="text-danger" exact>Forgot your Password</NavLink>
                </p>
                  <p className="full">
                    <button type="submit">Submit</button>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}
}

export default Signin;
