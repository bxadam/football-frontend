import { useState, useEffect } from "react";
import "./App.css";
import Preloader from "../Preloader/Preloader";
import Header from "../Header/Header";
import Results from "../Results/Results";
import Profile from "../Profile/Profile";
import Login from "../LoginModal/LoginModal";
import Register from "../RegisterModal/RegisterModal";
import Footer from "../Footer/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  const [results, setResults] = useState([]);

  // useEffect(() => {
  //   call GET from API search
  //     .then((data) => {
  //       setItems(data); // Assuming data is an array
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Results />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer></Footer>
      <Login></Login>
      <Register></Register>
      <Preloader></Preloader>
    </>
  );
}

export default App;
