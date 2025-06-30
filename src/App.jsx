import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GameElement from './GameElement'
import {read_excel_file} from './read_files.js'

function App() {
  function update_game_elements()
  {
    const game_info_copy=[...game_info];
    const game_elements_temp=game_info_copy.map(game=><GameElement game={game} key={game.ID}></GameElement>);
    setGameElements(game_elements_temp);
  }

  const [game_info,setGameInfo]=useState(null);
  const [game_elements,setGameElements]=useState([]);
  useEffect(()=>{
    read_excel_file("./Game_Info.xlsx").then((response)=>
    {
      console.log(response);
      setGameInfo(response);
    });
  },[]);

  useEffect(()=>{
    if(game_info!=null)
    {
      update_game_elements();
    }
  },[game_info])

  return (
    <>
      <h1>Deep Action Games Info</h1>
      {game_elements}
    </>
  )
}

export default App
