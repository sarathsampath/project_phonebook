
import React from 'react'
import axios from 'axios';

 class ResendOtp extends React.Component {
     constructor(props)
     {
         super(props);
         this.state={
             mail:"",
             data:""
         }

     }
     handleChange=(event)=>
     {
        this.setState({
            [event.target.name]:event.target.value });
     }
     handleBack=(event)=>
     {
        this.props.history.push({pathname:"/"});
     }
     handleform=(event)=>
     {event.preventDefault();
         const mailOtp={    
             mail:this.state.mail
         };
         console.log(mailOtp)
         axios.post('http://localhost:4000/phoneBook/validateMail',mailOtp)
         .then((result)=>
         {
            console.log(result.data.message);
            this.setState({
                data:result.data.message
            })
             
         })
         .catch((err)=>
         {
             console.log(err)
         }
         )
     }
    render() {
        const {mail}=this.state;
        return (
            <div>
                <div>
                    <p>
                        Enter the Registerd Mail!
                    </p>
                </div>
                <div>
                    <form onSubmit={this.handleform}>
                        <div>
                <label>
                    Mail:
                    <input type="text" name="mail" value={mail} onChange={this.handleChange}/>
                </label>
                </div>
                <div>
                    <input type="submit" value="send"/>
                </div>
                </form>
                
                </div>
                <div>
                    <button onClick={this.handleBack}>Back</button>
                </div>
               
                <div>
        <p>{this.state.data}</p>
                </div>
            </div>
        )
    }
}

export default ResendOtp
