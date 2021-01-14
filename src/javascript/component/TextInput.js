import react from "react";
import styles from "./TextInput.module.css";
import "../global/variables.module.css";
import "../global/global.module.css";

class TextInput extends react.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
    <label className ={`${styles.label}`} for={this.props.id}> 
        {this.props.field}
        </label>

    <input className ={`${styles.input}`}
     type={this.props.type} id={this.props.id} name={this.props.field}>

    </input>
      </div>
    );
  }
}

export default TextInput;
