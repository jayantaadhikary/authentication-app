import Header from "./components/Header";
import Card from "./components/shared/Card";
import Login from "./components/Login";
import PropTypes from "prop-types";

function App() {
  return (
    <>
      <Header />
      <Login />
    </>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

export default App;
