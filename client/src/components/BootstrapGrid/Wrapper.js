import React from "react";

const styles = {
  marginBottom: "50px",
  marginTop: "50px"
}

const Wrapper = ({children}) => (
  <div className="container" style={styles}>
    {children}
  </div>
);

export default Wrapper;