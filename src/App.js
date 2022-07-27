import Landing from './Pages/Landing';
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import TailwaindComponents from './Components/TailwindComponents';
import BootstrapComponents from './Components/BootstrapComponents';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Landing />
            }
          />
          <Route
            path="/tailwaindComponents"
            element={
              <TailwaindComponents />
            }
          />
          <Route
            path="/bootstrapComponents"
            element={
              <BootstrapComponents />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
