import React from "react";
class Auth extends React.Component{
    constructor(props)
    {
        super(props)
        this.Authenticated=true;
    }
    login()
    {
        this.Authenticated=true;
        localStorage.setItem('login',true)
        
     }
    logout()
    {
        this.Authenticated=false;
        localStorage.removeItem('login')        
    }
    isAuthenticated()
    {   
        return this.Authenticated;
    }
}
export default new Auth()
