import React, { Component } from 'react'
import Accordion from '../components/Accordion'
import styles from './Admin.module.scss'

export class Admin extends Component {
    render() {
        return (
            <div className={`${styles.container}`}>
                <h1 className={`title title--primary`}> Welcome back, Oriabure Augustine</h1>
                <Accordion></Accordion>
                <Accordion></Accordion>
                <Accordion></Accordion>
                <Accordion></Accordion>
            </div>
        )
    }
}

export default Admin
