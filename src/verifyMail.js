import React from 'react'
import axios from 'axios';

 class verifyMail extends React.Component {
     constructor(props)
     {
         super(props);
         this.state={
             mail:"",
             otp:"",
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
     handleResend=(event)=>
     {
         this.props.history.push({pathname:"/Resend"})
     }
     handleform=(event)=>
     {event.preventDefault();
         const mailOtp={    
             mail:this.state.mail,
             otp:this.state.otp
         };
         console.log(mailOtp)
         axios.post('http://localhost:4000/phoneBook/verifyMail',mailOtp)
         .then((result)=>
         {
            console.log(result);
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
        const {mail,otp}=this.state;
        return (
            <div>
                <div>
                    <p>
                        Enter the Registerd mail and OTP sent to the Registered Mail
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
                <label>
                    Otp:
                    <input type="text" name="otp" value={otp} onChange={this.handleChange}/>
                </label>
                
                </div>
                <div>
                    <input type="submit" value="verify"/>
                </div>
                </form>
                
                </div>
                <div>
                    <button onClick={this.handleBack}>Back</button>
                </div>
                <div>
                    <button onClick={this.handleResend}>Resend Otp</button>
                </div>
                <div>
        <p>{this.state.data}</p>
                </div>
            </div>
        )
    }
}

export default verifyMail
