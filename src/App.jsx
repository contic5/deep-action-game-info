import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GameElement from './GameElement'
import {read_excel_file} from './read_files.js'

function App() {
  function update_game_elements()
  {
    let game_info_copy=[...game_info];
    if(filtering_mature_games)
    {
      game_info_copy=game_info_copy.filter(game=>game.Mature_Rating==false);
    }
    const game_elements_temp=game_info_copy.map(game=><GameElement game={game} key={game.ID}></GameElement>);
    setGameElements(game_elements_temp);
  }
  function toggle_mature_games()
  {
    if(filtering_mature_games==true)
    {
      setFilteringMatureGames(false);
    }
    else
    {
      setFilteringMatureGames(true);
    }
  }

  const [game_info,setGameInfo]=useState(null);
  const [game_elements,setGameElements]=useState([]);
  const [filtering_mature_games,setFilteringMatureGames]=useState(true);
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
  },[game_info,filtering_mature_games])

  return (
    <>
      <h1>Deep Action Games Info</h1>
      <button onClick={toggle_mature_games} id="display_mature_games_button">{filtering_mature_games ? "Display Mature Games" :"Hide Mature Games"}</button>
      {game_elements}
    </>
  )
}

export default App
