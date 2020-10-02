import React from 'react';
import axios from "axios"

class Update extends React.Component {
  constructor(props)
  {
    super(props);
   
    this.state={
     street:' ',
    pincode:' ',
    
    posts:" "

  };
    this.handleSubmit=this.handleSubmit.bind(this)
    this.handleValue=this.handleValue.bind(this)
    this.handleEvent=this.handleEvent.bind(this)
    
 }
 
 handleValue(event)
 {
   this.setState({
     [event.target.name]:event.target.value
   });
 } 
handleEvent(event)
{
  
  this.props.history.push({pathname:"/HomePage"})
}
handleSubmit(event)
{event.preventDefault()
   
  let value={
    
    Address:{street:this.state.street,
    pincode:this.state.pincode},
    
  }
  console.log(value)
  alert("thank you ");
  console.log(this.props.location.state.ids)
  const id=this.props.location.state.ids
  axios.put('http://localhost:4000/phoneBook/'+id, value)
  .then((result) =>{console.log(result);
   this.setState({posts:result.data.message})
    })
   
  .catch((error)=>{console.log(error)});
  
}

  

render(){
  
   
  
  const {street,pincode}=this.state
 // console.log(this.props.location.state.id)
  return(
    <div>
      <form  onSubmit={this.handleSubmit}>
        
        <div>
        <label>
          street:
          <input type="text" name="street" value={street} onChange={this.handleValue} />
        </label>
        </div>
        <div>
        <label>
          pincode:
          <input type="text" name="pincode" value={pincode} onChange={this.handleValue} />
        </label>
        </div>
         
        <input type="submit" value="submit"/>
      </form>
      <div> 
        <button onClick={this.handleEvent}>
          Back
        </button>
      </div>
     <div>{this.state.posts}</div>
      </div>
  );

}
}

export default Update;













