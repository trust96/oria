import react from 'react';


class Button extends react.Component{
    render(){
        return(
            <button>{this.props.buttonName}</button>
        )
    }
}

export default Button;