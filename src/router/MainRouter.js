import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import SecreatPeak from "../pages/SecretPeak";

export default function MainRouter() {
  return (
    <HashRouter>
      <Header />
      <div class="content">
        <Routes>
          <Route path="/secret-peak" exact element={<SecreatPeak />} />
          <Route path="/" exact element={<SecreatPeak />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
