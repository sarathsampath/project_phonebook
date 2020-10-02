import React from 'react';
import axios from "axios";

class Getform extends React.Component {
  constructor(props)
  {
    super(props);
    this.state={
      posts:[] ,  
    number:'',
    data1:" ",
    check:" "

  };
    this.handleSubmit=this.handleSubmit.bind(this)
    this.handleValue=this.handleValue.bind(this)
    
 }
handleBack=(event)=>
{
this.props.history.push({pathname:"/HomePage",state:{ids:this.props.location.state.ids}})
}
 handleValue(event)
 {
   this.setState({
     [event.target.name]:event.target.value
   });
 } 
handleSubmit(event)
{event.preventDefault()
  alert("thank you "+this.state.number);
  console.log(this.state.number)
  
  axios.get('http://localhost:4000/phoneBook/'+this.state.number)
  .then((result) =>{
    if(result.data.isSuccess===true)
    {
      this.setState({posts:result.data.message});
      console.log(result.data.message); 
      this.setState({check:true})
    }
    else{
      this.setState({data1:"No Details Found"});
      this.setState({check:false})
    }
 
    })
   
  .catch((error)=>{console.log(error)});
  
}

  

render(){
  const {number}=this.state
  return(
    <div>
      <form  onSubmit={this.handleSubmit}>
        <div>
        <label>
          Number:
          <input type="text" name="number" value={number} onChange={this.handleValue} />
        </label>
        </div>
        
        <input type="submit" value="Submit"/>
      </form>
      <div>
        <button onClick={this.handleBack}>Back</button>
      </div>
  <div> {this.state.check? <div>{this.state.posts.map((post,i)=>(<div key={i}><label>Name:</label>{post.name}<div><label>Pincode:</label>{post.Address.pincode}</div><div><label>Network:</label>{post.mobilenumbers[0].networkType}</div></div>))}</div>
 :<div>
 {
   this.state.data1
 }
 </div>}</div>
      
      </div>
  );

}
}

export default Getform;



// <div>{this.state.posts.map((post,i)=>(<div key={i}><label>Name:</label>{post.name}</div>))}</div>
 









