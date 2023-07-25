import React from "react";

class Header extends React.Component {
  render() {
    return (
      <>
        <a href="https://www.algebra.hr/" target="_blank" rel="noreferrer">
          Algebra link
        </a>
        <p>{this.props.datum}</p>
      </>
    );
  }
}
export default Header;
