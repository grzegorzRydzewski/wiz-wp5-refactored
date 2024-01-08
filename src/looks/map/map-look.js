import React from 'react';
//import './index.css';
import Tile from './tile.js';
import PartyArrow from './party-arrow.js';
export default function MapLook( {party, level, gfx } ) { //mapa lookWidth, lookHeight,
  const lookWidth = 19;
  const lookHeight = 15;
  
  function renderMap() {
    const board = [];
    let centerX = Math.floor(lookWidth/2)  - party.px;
    let centerY = Math.floor(lookHeight/2)  - party.py;

    for (let y = 0 - centerY;y < lookHeight - centerY;y++){
      const tileRows = [];
      for(let x = 0 - centerX;x < lookWidth - centerX; x++) {
        if (party.px === x && party.py === y ) {
          tileRows.push(renderParty(party.px,party.py)); // ustawia druzyne

        } else {
            tileRows.push(renderTile(x,y));
        }
      }
      board.push(<div className="tile-row" key={"RowKey " + y} >{tileRows}</div>)
    }
    return (
        <div>
          {board}
        </div>
      );
  }
  function renderTile(x,y) {
    return (
      <div className="tile" key={"TileDivKey" + x + " " + y} >
        <Tile key={"TileKey" + x + " " + y} x={x} y ={y}
          level={level}
        />
      </div>
    );
  }
  function renderParty(x,y) {
    return (

      <div className="party" key="PartyDivKey">
        <div className="tile-under-party">
          <Tile key={"TileKey" + x + " " + y} x={x} y ={y}
            level={level}
            />
        </div>
        <div className="party-on-top-of-tile" >
          <PartyArrow key="PartyArrow" x={party.px} y={party.py}
            facing={party.pf} gfx={gfx}/>
        </div>

      </div>
    )
  }
  return ( // {renderMap()}
      <div className="map-look" key="MapLookKey" >
       
      </div>
    );
}
