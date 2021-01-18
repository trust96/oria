import React, { Component } from 'react';
import button from './button.module.scss';

export default class Button extends Component {
    constructor(props) {
        super(props)
    
        this.state = {

             
        }
    }
    render() {
        const {type, children,primary, fullwidth} = this.props;
        return (
            <>
              <button 
              type={type}
              className={`${primary? button.primary: ''} ${this.props.delete? button.delete: ''} ${fullwidth? button.fullwidth: ''}`}
              onClick={this.handleClick}
               >
                   {children}</button>  
            </>
        )
    }
}
