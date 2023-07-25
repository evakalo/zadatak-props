import React from "react";
import pt from "prop-types";
class Table extends React.Component {
  render() {
    const { imePrezime, datumRodenja, adresa, grad } = this.props;
    return (
      <table border={1}>
        <tr>
          <td>{imePrezime}</td>
          <td>{datumRodenja}</td>
          <td>{adresa}</td>
          <td>{grad}</td>
        </tr>
      </table>
    );
  }
}
Table.propTypes = {
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
export default Table;
