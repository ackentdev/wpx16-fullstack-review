import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {setUser} from '../../reducks/reducer'

class Login extends React.Component{
    constructor(){
        super()
        this.state = {
            email: '',
            password: ''
        }

    }

    login = async () => {
        let {email, password} = this.state
        const user = await axios.post('/api/login', {email, password})
        this.props.setUser(user.data);
        this.props.history.push('/home')
    }

    changeHandler = (property, value) => {
        this.setState({
            [property]: value
        })
    }

    render(){
        const {email, password} = this.state
    return(
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