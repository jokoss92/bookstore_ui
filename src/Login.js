import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Component } from 'react';

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }
    }
    render(){
        return(
            <div>
                <MuiThemeProvider>
                    <div>
                        <AppBar 
                        title="Login" />
                        <TextField 
                        hintText="Enter your Username"
                        floatingLabelText="Username"
                        onChange={(event,newValue) => this.setState({username:newValue})}/>
                        <br/>
                        <TextField 
                        hintText="Enter your Password"
                        floatingLabelText="Password"
                        onChange={(event,newValue) => this.setState({password:newValue})}/>
                        <br/>
                        <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}
const style = {
    margin: 15,
};

handleClick(event){
    var apiBaseUrl = "http://localhost:4000/api/";
}
export default Login;