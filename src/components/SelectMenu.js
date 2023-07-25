import React from "react";

class SelectMenu extends React.Component {
  render() {
    return (
      <select onChange={this.props.promijeniFormatPrikaza}>
        <option value="list">Lista</option>
        <option value="table">Tablica</option>
      </select>
    );
  }
}

export default SelectMenu;
