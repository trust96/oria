
import React, { Component } from 'react'
import Button from './Button'
import styles from './accordion.module.scss'

export default class Accordion extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             collapse:true
        }
    }
    collapse=()=>{
        this.setState({collapse:!this.state.collapse})
    }
    render() {
        return (
            <>
            <div 
            className={`${styles.accordionbutton}`}
            onClick={this.collapse}
            >
                <span>{this.props.date}</span>
            <div>
                <div><strong>Reported by:</strong></div>
                happy
            </div>
            </div>
            <p 
            className={`${this.state.collapse?styles.accordiontext:styles.accordiontextcollapse} ${styles.text}`}
            >
{this.props.children}
            </p>
            </>
        )
    }
}
