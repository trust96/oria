import React, { Component } from 'react'
import styled from 'styled-components'
import { Ctxt } from './Context'
const Button = styled.button`

background-color: var(--indigo);
border-radius: 25px;
border: 1px solid transparent;
font-size: 16px;
`

export default class Menu extends Component {
    static contextType = Ctxt
    render() {
        return (
<Button>trust</Button>
        )
    }
}
