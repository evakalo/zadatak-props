import React from "react";
import pt from "prop-types";
class List extends React.Component {
  render() {
    const { imePrezime, datumRodenja, adresa, grad } = this.props;
    return (
      <ul>
        <li>{imePrezime}</li>
        <li>{datumRodenja}</li>
        <li>{adresa}</li>
        <li>{grad}</li>
      </ul>
    );
  }
}
//importas proptypes pa dodijelis kao svojstvo toj komponenti
//za objekte se pise pt.shape()
List.propTypes = {
  formatPrikaza: pt.string,
  polaznik: pt.shape({
    ime: pt.string,
    prezime: pt.string,
    datumRodenja: pt.string,
    adresa: pt.string,
    grad: pt.string,
    imePrezime: pt.string,
  }),
};
export default List;
