import React, { Component } from 'react'
import textarea from './textarea.module.scss'
export default class TextArea extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             value:''
        }
    }
    
    render() {
        return (
            <div>
               <textarea name="" id="" cols="30" rows="10"> </textarea> 
            </div>
        )
    }
}
