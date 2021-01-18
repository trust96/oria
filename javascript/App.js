import react from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { CtxtPr } from "./Context";
import Menu from "./Menu";


class App extends react.Component {


  render() {

    return (
<CtxtPr>
  <Menu></Menu>
</CtxtPr>
    );
  }
}

export default App;
