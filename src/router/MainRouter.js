import { HashRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../pages/Home";
import KDA from "../pages/KDA";
import NotFound from "../pages/NotFound";
import SecreatPeak from "../pages/SecretPeak";

export default function MainRouter() {
  return (
    <HashRouter>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path='*' element={<NotFound />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/secret-peak" exact element={<SecreatPeak />} />
          <Route path="/kda" exact element={<KDA />} />
        </Routes>
      </div>
      <Footer />
    </HashRouter>
  );
}
