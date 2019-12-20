import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {setUser} from '../../reducks/reducer'

class Login extends React.Component{
    constructor(){
        super()
        this.state = {
            email: '',
            password: '',
            username: '',
            newUser: false
        }

    }

    login = async () => {
        let {email, password} = this.state
        const user = await axios.post('/api/login', {email, password})
        this.props.setUser(user.data);
        localStorage.setItem("user", user.data.username)
        this.props.history.push('/home')
    }

    register = async () => {
        let {username, email, password} = this.state
        const user = await axios.post('/api/register', {username, email, password})
        this.props.setUser(user.data)
        localStorage.setItem("user", user.data)
        this.props.history.push('/home')
    }

    changeHandler = (property, value) => {
        this.setState({
            [property]: value
        })
    }

    toggleDisplay = () => {
        this.setState({
            newUser: !this.state.newUser
        })
    }

    render(){
        const {email, password, username, newUser} = this.state
    return(
        <div>
            {!newUser
                ?
                <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                this.login()
            }}>
                <input
                placeholder="email" 
                type="text"
                name="email" 
                value={email} 
                onChange={(e) => {this.changeHandler(e.target.name, e.target.value)}}/>
                <input 
                placeholder="password"
                type="password"
                name="password" 
                value={password} 
                onChange={(e) => {this.changeHandler(e.target.name, e.target.value)}}/>
                <input 
                type="submit"
                value="Login"/>
            </form>
            <button onClick={() => this.toggleDisplay()}>Create an Account</button>
            </div>
            :
            <div>
               <form onSubmit={(e) => {
                e.preventDefault()
                this.register()
                }}>
                <input 
                placeholder="username"
                type="text"
                name="username"
                value={username}
                onChange={(e) => {this.changeHandler(e.target.name, e.target.value)}}
                />
                <input
                placeholder="email" 
                type="text"
                name="email" 
                value={email} 
                onChange={(e) => {this.changeHandler(e.target.name, e.target.value)}}/>
                <input 
                placeholder="password"
                type="password"
                name="password" 
                value={password} 
                onChange={(e) => {this.changeHandler(e.target.name, e.target.value)}}/>
                <input 
                type="submit"
                value="Register"/>
            </form>
            <button onClick={() => this.toggleDisplay()}>I already have an account</button> 
            </div>
        }
            
        </div>
    )
    }
}

function mapReduxStateToProps(reduxState){
    return reduxState
}

const mapDispatchtoProps = {
    setUser
}

export default connect(mapReduxStateToProps, mapDispatchtoProps)(Login)