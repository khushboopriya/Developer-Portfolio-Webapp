import React, { Component } from 'react';
import {ReactComponent as Love } from '../Image/DevIcon/love.svg'
import classes from './StyleFooter.css'



class  Footer extends Component {
        render(){
            return (
                <div className="main">
                    <p className="text">
                    Made with <Love style={{fill:"red"}} className="love" /> by Khushboo
                    </p>
                </div>  
            )               
        }                 
}

export default Footer;