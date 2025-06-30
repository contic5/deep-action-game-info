import './GameElement.css'
import { useState,useEffect } from 'react'

function GameElement(props)
{
    const game=props.game;
    const [link_elements,setLinkElements]=useState();
    const link_columns=["Steam","Playstation","Xbox","Nintendo_Switch"];

    useEffect(()=>{
        let links_elements_temp=[];
        for(let link_column of link_columns)
        {
            if(game[link_column])
            {
                links_elements_temp.push((<p>
                {link_column}: <a href={game[link_column]}>{game[link_column]}</a>
                </p>));
            }
        }
        setLinkElements(links_elements_temp);
    },[]);

    const major_boss_embed=<iframe width="560" height="315" src={"https://www.youtube.com/embed/"+game.Major_Boss_Youtube_Src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>;

    let display_mature_rating="";
    if(game.Mature_Rating)
    {
        display_mature_rating=<h3>Rating: <b>Mature</b></h3>;
    }
    return(<>
    <div className="gameElement">
    <h2>Game Element: {game.Game}</h2>
    {display_mature_rating}
    <img src={game.Logo} className="gameLogo"></img>
    <h3>Game Info</h3>
    <p>{game.Short_Official_Description}</p>
    <h3>Stores</h3>
    {link_elements}
    <h3>Major Boss</h3>
    {major_boss_embed}
    </div>
    </>);
}

export default GameElement;