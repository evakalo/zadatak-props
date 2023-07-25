import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import React from "react";

class App extends React.Component {
  state = {
    datum: new Date().toLocaleDateString(),
    naslov: "Učilište Algebra",
  };
  promijeniNaslov = () => {
    this.setState({ naslov: "Novi tečaj u Algebri" });
  };

  render() {
    const { naslov, datum } = this.state;
    return (
      <>
        <Header naslov={naslov} />
        <Main />
        <Footer datum={datum} />
        <button type="button" onClick={this.promijeniNaslov}>
          {" "}
          Promijeni naslov
        </button>
      </>
    );
  }
}
export default App;
