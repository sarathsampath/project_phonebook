import React from "react";
import axios from "axios";
var jwt = require('jsonwebtoken');

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      data1: " ",
      check:"false"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleValue = this.handleValue.bind(this);
    this.handlePost = this.handlePost.bind(this);
  }

  handleValue(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  handlePost(event)
  {
    const { history } = this.props;
    history.push({ pathname: "/post" });


   
  }
  handleMail=(event)=>
  {
    const { history } = this.props;
    history.push({ pathname: "/verifyMail" });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { history } = this.props;
    alert("thank you " + this.state.name);
    const value = {
      mail: this.state.name,
      password: this.state.password,
    };
    console.log(value);
    
    axios
      .post("http://localhost:4000/users",value)
      .then((result) => {
        console.log(result.data.message);
        const id=result.data.message;
        console.log(id)
        var decoded = jwt.decode(id);
        
       if (result.data.isSuccess === true) {
      localStorage.setItem('login',result.data.message)
     history.push({ pathname: "/HomePage",state:{ids:decoded.id} });
       }
      else {       
          this.setState({ data1: "invalid login" });
       }
      })

      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { name, password } = this.state;

    return (
      <div>
        
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Mail_Id:
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleValue}
              />
            </label>
            </div>
            <div>
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={password}
                onChange={this.handleValue}
              />
            </label>
            
          </div>

          <input type="submit" value="submit" />
        </form>
    <div>
    <button onClick={this.handleMail} >Verify Mail
</button>
    </div>
    <button onClick={this.handlePost} >signup
</button>
        <div>{this.state.data1}</div>
      </div>
    );
  }
}

export default Login;
