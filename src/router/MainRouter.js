import {
  HashRouter,
  Route,
  Routes
} from "react-router-dom";
import SecreatPeak from "../pages/SecretPeak";

export default function MainRouter() {
    return (
      <HashRouter basename="mir4-util">
          <Routes>
            <Route path="/secret-peak" exact element={<SecreatPeak />} />
            <Route path="/" exact element={<SecreatPeak />} />
          </Routes>
      </HashRouter>
    );
  }
  