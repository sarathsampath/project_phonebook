import React from 'react';
import axios from "axios"

class FormC extends React.Component {
  constructor(props)
  {
    super(props);
   
    this.state={
      name:'',
    street:'',
    pincode:'',
    network: 'Office ',
    networkType:'Airtel',
    number:'',
    posts:"",
    check:true,

  };
    this.handleSubmit=this.handleSubmit.bind(this)
    this.handleValue=this.handleValue.bind(this)
 }

 handleValue(event)
 {

   this.setState({
     [event.target.name]:event.target.value,
    
     
   });

 } 
 handleEvent=()=>
 {
  this.props.history.push({pathname:"/"})
 }

async handleSubmit(event)
{event.preventDefault()
  let value={
    name:this.state.name,
    mail:this.state.mail,
    password:this.state.password,
    Address:{street:this.state.street,
    pincode:this.state.pincode},
    mobilenumbers:[{
contactType:this.state.network,
networkType:this.state.networkType,
number:this.state.number
    }]
  }
  console.log(value)
  alert("thank you "+this.state.name);
 await axios.post('http://localhost:4000/phoneBook/', value)
  .then((result) =>{
    console.log(result.data);
    if(result.data.isSuccess===true)
    {
      
    axios.post('http://localhost:4000/phoneBook/validateMail', value)
      this.setState({posts:result.data.message})
    }
    else{
      this.setState({posts:result.data.message})
    }
  
    })
   
  .catch((error)=>{console.log(error)});
  
}

  

render(){
  const {name,street,pincode,network,networkType,number,mail,password}=this.state
  return(
    <div>
      <form  onSubmit={this.handleSubmit}>
        <div>
        <label>
          Name:
          <input type="text" name="name" value={name} onChange={this.handleValue} />
        </label>
        </div>
        <div>
        <label>
          Mail:
          <input type="text" name="mail" value={mail} onChange={this.handleValue} />
        </label>
        </div> 
        <div>
        <label>
          Password:
          <input type="password" name="password" value={password} onChange={this.handleValue} />
        </label>
        </div>
        <div>
        <label>
          Street:
          <input type="text" name="street" value={street} onChange={this.handleValue} />
        </label>
        </div>
        <div>
        <label>
          Pincode:
          <input type="text" name="pincode" value={pincode} onChange={this.handleValue} />
        </label>
        </div>
        <div>
        <label>
          ContactType:
          <select name="network" onChange={this.handleValue} value={network}>
            <option value="Office">Office</option>
            <option value="Home">Home</option>
          </select>
  
        </label>
        </div>
        <div>
        <label>
          NetworkType:
          <select name="networkType" onChange={this.handleValue} value={networkType}>
            <option value="Jio">Jio</option>
            <option value="Airtel">Airtel</option>
            <option value="BSNL">BSNL</option>
          </select>
             </label>
        </div>
        <div>
        <label>
          MobileNumber:
          <input type="text" name="number" value={number} onChange={this.handleValue} />
        </label>
        </div>
        
        <input type="submit" value="submit"/>
      </form>
      
      
      <div>{this.state.posts}</div>
 <div> <button onClick={this.handleEvent}>Back
</button></div>
      </div>
  );

}
}

export default FormC;


//<div>{this.state.posts.map((post)=><div>{post.id}</div>)}</div>


// {this.state.check?<Redirect to={{pathname: "/update",state: { id: '3ros_egYv' }}}/>:<p>noooo</p>}


//<button><Link to="/update">Update</Link></button>




