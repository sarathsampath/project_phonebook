import React, { Component } from 'react';
import axios from 'axios';
import { useParams } from "react-router";
import { Link } from 'react-router-dom';
export default class Header extends Component {
  constructor(props) {
    super(props);
     this.state={
       files:null
     }
      this.handleOnchange=this.handleOnchange.bind(this);
      
   
  }
  handleOnchange(event)
  {
    this.setState({
      files:event.target.files[0]
    })
  }
handleDownload=async (event)=>
{
  event.preventDefault();
  await  axios.get("http://localhost:4000/download")
  .then((respone)=>
  {
    console.log(respone)
  })
}

handleBack=(event)=>
{
    this.props.history.push({pathname:"/HomePage"})
}
  handleSubmit=async (event)=>
  {event.preventDefault();
    const formData = new FormData();
    console.log("hi")
    console.log(this.state.files)
   await formData.append('file',this.state.files)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
  await  axios.post("http://localhost:4000/uploadfile",formData,config)
.then((respone)=>
{
  console.log(respone)
})
  }

User() {
  let { id } = useParams();
  return <h2>User {id}</h2>;
}
  render() {
    return (
      <div className="row">
        <div className="logo">
          <form onSubmit={this.handleSubmit} >
            <div>
            <input type="file" name="file" onChange={this.handleOnchange}/>
            </div>
          <div>
          <input type="submit" value="submit"/>
          </div>
         
          </form>
         <div>
           <a href ="http://localhost:4000/download" target="_blank">Download</a>
         </div>
          </div>
          <div>
           <button onClick={this.handleBack}>Back</button>
         </div>
          </div>
      
    );
  }
}