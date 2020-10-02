import React from 'react';
import axios from "axios"

class Update extends React.Component {
  constructor(props)
  {
    super(props);
   
    this.state={
     number:"",
     data:""

  };
    this.handleSubmit=this.handleSubmit.bind(this)
   this.handleValue=this.handleValue.bind(this)
   this.handleSubmit=this.handleSubmit.bind(this)
    
 }
 handleBack=(event)=>
 {
 this.props.history.push({pathname:"/HomePage"})
 }

handleValue(event)
{
  
  this.setState({
    [event.target.name]:event.target.value
  })
}
handleSubmit(event)
{event.preventDefault()
   
  let value={
    number:this.state.number
    
  }
  console.log(value)
  alert("thank you ");
  console.log(this.props.location.state.ids)
  const id=this.props.location.state.ids
  axios.delete('http://localhost:4000/phoneBook/'+id+"/"+this.state.number)
  .then((result) =>{console.log(result.data.isSuccess);
    if(result.data.isSuccess===true)
    {   localStorage.removeItem("login")
        this.props.history.push({pathname:"/"})
    }
    else{
        this.setState({data:"Invalid Number"})
    }
   
    })
   
  .catch((error)=>{console.log(error)});
  
}

  

render(){
  
  return(
      
    <div>
      <form  onSubmit={this.handleSubmit}>
        
        <div>
        <label>
          Number:
          <input type="text" name="number" value={this.state.number} onChange={this.handleValue} />
        </label>
        </div>
         
        <input type="submit" value="Confirm"/>
      </form>
      <div> 
        <button onClick={this.handleBack}>
          Back
        </button>
      </div>
      <div>
  <p>{this.state.data}</p>
      </div>
      </div>
  );

}
}

export default Update;













