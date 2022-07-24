import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import SecreatPeak from "../pages/SecretPeak";

export default function MainRouter() {
    return (
      <Router>
          <Routes>
            <Route path="/mir4-util/secret-peak" exact element={<SecreatPeak />} />
            <Route path="/mir4-util" exact element={<SecreatPeak />} />
          </Routes>
      </Router>
    );
  }
  