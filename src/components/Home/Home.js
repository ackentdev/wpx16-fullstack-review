import React from 'react';

export default class Home extends React.Component{
    constructor(){
       
    }
    

    render(){
    return(
        <div>
        {!this.props.user
        ?
            <img src="cuteanimation" />
        :
        <div>This is the home component</div>
        }
        </div>
    )
    }
}