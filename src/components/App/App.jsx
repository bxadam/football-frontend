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
import { getLeagues, getPlayers, getTeams } from "../../utils/api";

function App() {
  const [leagues, setLeagues] = useState([]);
  const [players, setPlayers] = useState([]);
  const [team, setTeam] = useState([]);

  useEffect(() => {
    getLeagues()
      .then((res) => setLeagues(res.response))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    getPlayers()
      .then((res) => setPlayers(res.response))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // useEffect(() => {
  //   getTeams("Manchester United")
  //     .then((res) => setTeam(res.response))
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // });

  console.log(leagues);
  console.log(players);

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
