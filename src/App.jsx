import Navbar from "./componets/Navbar";
import Footer from './componets/Footer'
import Curated from "./componets/Curated";
import Room from "./Room";
import Keeping from "./componets/Keeping";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Curated />
      <Room />
      <Keeping />
      <Footer/>
    </>
  );
}

export default App;
