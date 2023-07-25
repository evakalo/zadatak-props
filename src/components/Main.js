import React from "react";
import List from "./List";
import Table from "./Table";
import SelectMenu from "./SelectMenu";
class Main extends React.Component {
  state = {
    formatPrikaza: "list",
    polaznik: {
      ime: "Iva",
      prezime: "Sopta",
      datumRodenja: "25.6.1985.",
      adresa: "Ilica 15",
      grad: "Zagreb",
      imePrezime: () => {
        //tu pises javascript a ne jsx
        return `Ime korisnika je ${this.state.polaznik.ime} ${this.state.polaznik.prezime}`;
      },
    },
  };
  promijeniFormatPrikaza = (event) => {
    this.setState({ formatPrikaza: event.target.value });
  };
  render() {
    const { polaznik, formatPrikaza } = this.state;
    const ispis =
      formatPrikaza === "list" ? (
        <List
          imePrezime={polaznik.imePrezime()}
          datumRodenja={polaznik.datumRodenja}
          adresa={polaznik.adresa}
          grad={polaznik.grad}
        />
      ) : formatPrikaza === "table" ? (
        <Table
          imePrezime={polaznik.imePrezime()}
          datumRodenja={polaznik.datumRodenja}
          adresa={polaznik.adresa}
          grad={polaznik.grad}
        />
      ) : (
        <h3>Pogrešno odabran format prikaza podataka.</h3>
      );
    return (
      <div>
        <SelectMenu promijeniFormatPrikaza={this.promijeniFormatPrikaza} />
        {ispis}{" "}
      </div>
    );
  }
}

export default Main;
