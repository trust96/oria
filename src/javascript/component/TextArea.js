import react from "react";
import styles from "./TextArea.module.css";
import "../global/variables.module.css";
import "../global/global.module.css";

class TextArea extends react.Component {
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

    <textarea className ={`${styles.input}`}
     type={this.props.type} id={this.props.id} name={this.props.field}>

    </textarea>
      </div>
    );
  }
}

export default TextArea;