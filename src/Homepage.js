import React from 'react'
var jwt = require('jsonwebtoken');
class Homepage extends React.Component {
    handleupload=(event)=>
    {   const token= localStorage.getItem("login");
        
       var decoded = jwt.decode(token);
       console.log(decoded.id)
       this.props.history.push({pathname:"/upload",state:{ids:decoded.id}})
    }
    handleUpdate=(event)=>
    {   const token= localStorage.getItem("login");
        
        var decoded = jwt.decode(token);
        console.log(decoded.id)
        console.log("update",decoded.id);
        this.props.history.push({pathname:"/update",state:{ids:decoded.id}})
    }
    handleFind=(event)=>
    { 
        const token= localStorage.getItem("login");
        var decoded = jwt.decode(token);
        console.log(decoded.id)
        this.props.history.push({pathname:"/users",state:{ids:decoded.id}})
    }
    handleEvent=(event)=>
    {   localStorage.removeItem("login");
        this.props.history.push({pathname:"/"})
    }
    handleDelete=()=>
    {   const token= localStorage.getItem("login");
    console.log(token);
    var decoded = jwt.decode(token);
    console.log(decoded.id)
        const id=this.props.location.state.ids;
        console.log("delete",id);
        this.props.history.push({pathname:"/Delete",state:{ids:id}})
    }
    render() {
       
        return (
            <div>
                <div>
                <button onClick={this.handleUpdate}>Update</button>
                </div>
                <div>
                <button onClick={this.handleFind}>Find Data</button>
                </div>
                <div>
                <button onClick={this.handleDelete}>Delete</button>
                </div>
                <div> 
              <button onClick={this.handleupload}>
                  Upload
              </button>
                 </div>
                <div> 
              <button onClick={this.handleEvent}>
                  Logout
              </button>
                 </div>
                
            </div>
        )
    }
}

export default Homepage
