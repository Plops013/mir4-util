import { HashRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import SecreatPeak from "../pages/SecretPeak";

export default function MainRouter() {
  return (
    <HashRouter>
      <Header />
      <div class="content">
        <Routes>
          <Route path="/secret-peak" exact element={<SecreatPeak />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/" exact element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </HashRouter>
  );
}
