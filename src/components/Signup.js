import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class SignUp extends Component {
  constructor(props){
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    alert("Sign up Succesful");
    e.preventDefault();
  }
  render(){

    return(
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
                        <button type="button" className="btn btn-primary btn-link"><NavLink to="/" activeClassName="is-active" exact>SignUp</NavLink></button>
                        <button type="button" className="btn btn-secondary btn-link"><NavLink to="/sign-in" activeClassName="is-active" exact>SignIn</NavLink> </button>
                  </div>
                  </center>
              </div>
              <div className="contact">
                <h3>Sign Up</h3>
                <form action="" onSubmit={this.handleSubmit}>
                  <p>
                    <label htmlFor="">First Name</label>
                    <input type="text" name="name" required />
                  </p>
                  <p>
                    <label htmlFor="">Last Name</label>
                    <input type="text" name="Company" required/>
                  </p>
                  <p>
                    <label htmlFor="">Email</label>
                    <input type="email" name="Email" required/>
                  </p>
    
                  <p>
                    <label htmlFor="">Password</label>
                    <input type="password" name="name" required/>
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
    )
}
}

export default SignUp;
