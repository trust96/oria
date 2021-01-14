import react from "react";
import Report from '../module/Report'
import "../global/variables.module.css";
import "../global/global.module.css";

class Admin extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  clickHandler = ()=> this.props.buttonEvent();
  render() {
    return (
        <div>

</div>
    );
  }
}


export default Admin;
