import "./App.css";
import AboutPage from "./pages/AboutPage/AboutPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import Layout from "./containers/Layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
