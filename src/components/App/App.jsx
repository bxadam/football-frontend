import { useState, useEffect } from "react";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Preloader from "../Preloader/Preloader";
import Header from "../Header/Header";
import Results from "../Results/Results";
import Login from "../LoginModal/LoginModal";
import Register from "../RegisterModal/RegisterModal";
import Footer from "../Footer/Footer";

function App() {
  const [count, setCount] = useState(0);
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
      <Results results={results}></Results>
      <Footer></Footer>
      <Login></Login>
      <Register></Register>
      <Preloader></Preloader>
    </>
  );
}

export default App;
