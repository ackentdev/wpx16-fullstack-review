import React from 'react';
import axios from 'axios'
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {setUser} from '../../reducks/reducer'

class Header extends React.Component{

    componentDidMount(){
        this.getUser()
    }

    getUser = async() => {
        const user = await axios.get('/api/userSession')
        this.props.setUser(user.data)
    }
    render(){
        console.log("from redux: ", this.props.user)
    return(
        <div>
            {this.props.user 
            ?
            <header>
                <NavLink exact to='/'>Login</NavLink>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/add_meme">Add Meme</NavLink>
            </header>
            :
            <header>
                <NavLink exact to='/'>Login</NavLink>
            </header>
            }
        
        </div>
    )
    }
}

function mapReduxStateToProps(reduxState){
    return reduxState;
}

const mapDispatchToProps = {
    setUser
}


export default connect(mapReduxStateToProps, mapDispatchToProps)(Header);