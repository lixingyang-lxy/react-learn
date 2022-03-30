import React from "react";
import withAdminAuth from "../utils/auth";

class PageA extends React.Component {
  constructor(props) {
      super(props);
      // something here...
  }
  UNSAFE_componentWillMount() {
      // fetching data
  }
  render() {
      // render page with data
  }
}
export default withAdminAuth(PageA);