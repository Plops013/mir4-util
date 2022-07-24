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
            <Route path="/secreat-peak" element={<SecreatPeak />} />
            <Route path="/" element={<SecreatPeak />} />
          </Routes>
      </Router>
    );
  }
  