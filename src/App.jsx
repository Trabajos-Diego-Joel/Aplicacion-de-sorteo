
import { Router, Route } from "wouter";
import Home from "./pages/Home";
import Rank from "./pages/Rank";
import ConfirmedNumbers from "./pages/ConfirmedNumbers";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Detail from "./pages/Detail";
import FormData from "./components/Form";

function App() {
  return (
    < >
      {/* Navbar */}
      <Navbar />
      {/* Router */}
      <Router base="/">
        {/* Home Page */}
        <Route path="/">
          <Home />
        </Route>
        {/* Ranking Page */}
        <Route path="rank">
          <Rank />
        </Route>
        {/* Confirmed Numbers Page */}
        <Route path="numeros-confirmados">
          <ConfirmedNumbers />
        </Route>

        <Route path="resumen-compra">
          <Detail />
        </Route>
        <Route path="resumen-compra/mis-datos">
          <FormData />
        </Route>


        {/* 404 Page */}
        
        

      </Router>
      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
