import React from 'react';
import { NavLink } from 'react-router-dom';
import "../forgot.css";
class  Forgot extends React.Component {
    
    constructor(props){
        super(props);

        this.state = {
            verifyEmail : false,
            password : ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let val = e.target.resEmail.value;
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       if(re.test(val)) this.setState({ verifyEmail : true });
       else alert("Please input a valid email address");
      
    }

    handleChange(e){
        this.setState({password: e.target.value});
        let pass = document.getElementById("data");
        if(this.state.password.length < 6){
            pass.innerHTML = "Password must contain greater than 6 digits";
            pass.style.display = "block";
        }else {
            pass.style.display = "none";
        }
        e.preventDefault();
    }

    handlePassword(e) {
        let home = document.getElementById("home");
       let pass1 = e.target.pass1.value;
       let pass2 = e.target.pass2.value;
       if(pass1 === pass2) {
         alert("Password Changed Successfully");
        home.style.display = "block";
        home.style.margin = "15px";
       }else {
           alert("Password don't match");
           e.target.pass1.value = "";
           e.target.pass2.value = "";
       }
        e.preventDefault();
    }

    render(){
        const  { verifyEmail,password } = this.state; 
    return(
        
            verifyEmail ?
            <div className="forgot__body">
            <h1 className="text-primary text-center">Reset Your Password</h1>
            <div className="form-group">
            <form onSubmit={this.handlePassword}>
              <label htmlFor=""></label>
              <input type="password"
                className="form-control mb-2" name="pass1" placeholder="Set New Password" value={password} onChange={this.handleChange}/>
                <span className="text-danger" id="data" style={{"display":"none"}}></span>
                <input type="password"
                className="form-control mt-2" name="pass2" placeholder="Confirm Password" />
                <button type="submit" className="btn btn-primary mt-2">Submit</button>
                </form>
                <div id="home" style={{display:"none"}}>
                <NavLink to="/" activeClassName="is-active" style={{"textAlign":"center"}} >Goto Home</NavLink>
                </div>
            </div>
            </div>
             :
            <div className="forgot__body">
            <h1 className="text-primary text-center">Reset Your Password</h1>
            <div className="form-group">
            <form onSubmit={this.handleSubmit}>
              <label htmlFor=""></label>
              <input type="email"
                className="form-control" name="resEmail" id="" aria-describedby="helpId" placeholder="Email Address" />
                <button type="submit" className="btn btn-info mt-2 mr-1">Submit</button>
                </form>
            </div>
          
          </div>
    )
}
}


export default Forgot;