import React from 'react';
import ReactDOM from 'react-dom';
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }
  handleLoginClick()
  {
    this.setState({isLoggedIn: true});
  }
  handleLogoutClick()
  {
    this.setState({isLoggedIn: false});
  }
  render()
  {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }
    return(
      <div>
      {button}</div>


    );
    
function LoginButton(props)
{
  return( <button  onClick={props.onClick}>login</button>);
}
function LogoutButton(props)
{
  return( <button onClick={props.onClick}>logout</button>);
}

  }
}
ReactDOM.render(
  <LoginControl />,
  document.getElementById('root')
);













/*import React from 'react';
import ReactDOM from 'react-dom';

class Model extends React.Component{
 constructor()
 {
   super();
   this.state={date:new Date()}
 } 
 componentDidMount()
 {
   setInterval(
     ()=>this.tick(),1000);
 }
 tick()
 {
   this.setState({date:new Date()});
 }
render()
{
return(
  <div className="Intro part">
    <img 
    className="photo"
      src={this.props.image.url}
      alt={this.props.image.data}
      width="100"
      height="100"
 />
<p >{this.props.name}</p>
<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
  </div>
  
  );

}

}

const datas={
  profilepic:{
    url:"../img_girl.jpg",
    data:"profilepic"
  },
  name:"sarath.s"
}


ReactDOM.render(
  <Model
    image={datas.profilepic} 
    name={datas.name}
   />,
  document.getElementById('root')
);












 /*
  render()
  {function formatDate(date) {
    return date.toLocaleDateString();
  }
    return (
      <div className="Comment">
        <div className="UserInfo">
          <img
            className="Avatar"
            src={this.props.author.avatarUrl}
            alt={this.props.author.name}
          />
          <div className="UserInfo-name">
            {this.props.author.name}
          </div>
        </div>
        <div className="Comment-text">{this.props.text}</div>
        <div className="Comment-date">
          {formatDate(this.props.date)}
        </div>
      </div>
    );}
}


const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl:"../../img_girl.jpg" ,
  },
};
ReactDOM.render(
  <Model
    date={comment.date}
    text={comment.text}
    author={comment.author}
  />,
  document.getElementById('root')
);

*/
