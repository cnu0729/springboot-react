import "./App.css";
import Banner from "./component/layout/Banner";
import Header from "./component/layout/Header";
import Main from "./component/Main";
import Board from "./component/Board";
import Profile from "./component/Profile";
import Footer from "./component/layout/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Banner />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/board" element={<Board />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
