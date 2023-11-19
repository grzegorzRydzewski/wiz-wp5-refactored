import React from 'react';
//import './index.css';
import Tile from './tile.js';
import PartyArrow from './party-arrow.js';
export default function MapLook( { lookWidth, lookHeight, gfx } ) { //mapa
  lookWidth = 19;
  lookHeight = 15;
  
  function renderMap() {
    const board = [];
    let centerX = Math.floor(this.lookWidth/2)  - this.props.party.px;
    let centerY = Math.floor(this.lookHeight/2)  - this.props.party.py;

    for (let y = 0 - centerY;y < this.lookHeight - centerY;y++){
      const tileRows = [];
      for(let x = 0 - centerX;x < this.lookWidth - centerX; x++) {
        if (this.props.party.px === x && this.props.party.py === y ) {
          tileRows.push(this.renderParty(this.props.party.px,this.props.party.py)); // ustawia druzyne

        } else {
            tileRows.push(this.renderTile(x,y));
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
          currentLevel={this.props.currentLevel}
        />
      </div>
    );
  }
  function renderParty(x,y) {
    return (

      <div className="party" key="PartyDivKey">
        <div className="tile-under-party">
          <Tile key={"TileKey" + x + " " + y} x={x} y ={y}
            currentLevel={this.props.currentLevel}
            />
        </div>
        <div className="party-on-top-of-tile" >
          <PartyArrow key="PartyArrow" x={this.props.party.px} y={this.props.party.py}
            facing={this.props.party.pf} gfx={gfx}/>
        </div>

      </div>
    );
  }
  return (
      <div className="map-look" key="MapLookKey" >
        {this.renderMap()}
      </div>
    );
}
