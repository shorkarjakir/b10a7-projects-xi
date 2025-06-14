import { useState } from 'react'
import './App.css'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { ToastContainer, toast } from 'react-toastify';
import Available from './Components/Available'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import Newsletter from './Components/Newsletter'
import Players from './Components/Player/Players'
import Navigation from './Navigation/NavBar'
import Selected from './Components/Selected'

function App() {
  
  const [claim, setClaim] = useState(0);
  const [selectedPlayer, setSelectedPlayer] = useState([]);
  const [view, setView] = useState('available');
  const [tolalPlayers, setTotalPlayers] = useState(0);


  const claimCredit = () => {
    setClaim(Math.floor(Math.random() * 10000000) + claim );
    toast.success(`Congratulations! You have claimed ${claim} credits.`, {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      className: "text-green-500",
    });
  }

  const choosePlayer = (biddingPrice, player) => {

    if (biddingPrice > claim) {
      toast.error("Insufficient credits to choose this player.", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        className: "text-red-500",
      });
      return;
    }
    if (selectedPlayer.includes(player)) {
      toast.dark("You have already chosen this player."), {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        className: "text-red-500",
      }
      return;
    }
    if (selectedPlayer.length >= 11) {
      toast.error("You can only select up to 11 players.", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        className: "text-red-500",
      });
      return;
    }
    const selectedPlayers = [...selectedPlayer, player];
    setSelectedPlayer(selectedPlayers);
    setClaim(claim - biddingPrice);
  }

  const chossenPlayer = () => {
  
    if (selectedPlayer.length === 0) {
      return <p className="text-orange-400 flex justify-center text-center">No player selected yet.</p>;
    }
    return (
      <div className="mt-4">
        {selectedPlayer.map((player) => (
          <Selected key={player.playerId} player={player} deletePlayer={deletePlayer}></Selected>
        ))}
        <button onClick={() => showAvailablePlayers()} className="ml-8 mt-2 font-bold border-2 p-4 bg-yellow-500 rounded-lg text-base">Add More Players</button>
      </div>
    );
  }

  const showAvailablePlayers = () => setView('available');
  const showSelectedPlayers = () => setView('selected');

  const deletePlayer = (playerId, biddingPrice) => {
    const updatedPlayers = selectedPlayer.filter(player => player.playerId !== playerId);
    setSelectedPlayer(updatedPlayers);
    setClaim(claim + biddingPrice);
    toast.info(`Player removed. ${biddingPrice} credits refunded.`, {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      className: "text-blue-500",
    });
  }

const firebaseConfig = {
  apiKey: "AIzaSyD8n6zVwqy3qMbYJL5NwfxthGZZe1sWlC8",
  authDomain: "b10a7-projects.firebaseapp.com",
  projectId: "b10a7-projects",
  storageBucket: "b10a7-projects.firebasestorage.app",
  messagingSenderId: "989617442484",
  appId: "1:989617442484:web:c34de900454c99002991e1",
  measurementId: "G-5FCBNS72CB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
analytics;

  return (
    <>
      <div>
          <Navigation claim={claim}></Navigation>
          <Banner claimCredit={claimCredit}></Banner>
          <Available 
          showAvailablePlayers={showAvailablePlayers}
          showSelectedPlayers={showSelectedPlayers}
          view={view}
          selectedPlayer={selectedPlayer.length}
          tolalPlayers={tolalPlayers}
          ></Available>
           {view === 'available' && <Players choosePlayer={choosePlayer} setTotalPlayers={setTotalPlayers}></Players>}
           {view === 'selected' && chossenPlayer()}
          <div className=''>
            <Newsletter></Newsletter>
          </div>
          <Footer></Footer>
          <ToastContainer />
      </div>
    </>
  )
}

export default App
