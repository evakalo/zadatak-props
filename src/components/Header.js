import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.naslov}</h1>
        <h2> Algebra</h2>
        <p>Gradiščanska 11</p>
        <p>Let's do it</p>
      </div>
    );
  }
}
export default Header;
