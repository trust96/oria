
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
    date = new Date().toLocaleDateString();
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
                <span>{this.date}</span>
            <Button delete>Delete</Button> 
            </div>
            <p 
            className={`${this.state.collapse?styles.accordiontext:styles.accordiontextcollapse} ${styles.text}`}
            >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ullam repudiandae obcaecati fugit dolorum? Obcaecati praesentium ducimus aspernatur odio ab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, doloribus quidem. Qui dolore ut corrupti dolorum quod consectetur soluta cupiditate architecto illo incidunt. Consequatur, numquam? Quod harum eaque blanditiis, ab aspernatur voluptatibus maiores deleniti saepe temporibus odit in, mollitia quia ullam quae ipsam voluptate libero dolorem, sapiente numquam odio atque.
            </p>
            </>
        )
    }
}
