import React from "react";
import loadAll from "./loadAll.js";
import GfxEngine from './gfx-engine.js';
import Level from './level.js';
import Party from './party.js';

//github test

// tomorrow i will do some serious coding :D

function App( {level, party, look} ) {
  const images = loadAll(require.context('../assets/gfx/map-look/', false, /\.(png|jpe?g|svg)$/));
  
  look = "map";

  party = new Party(2,2,'E');

  level = new Level('dung01');
  level.explore(2,2);
  level.greyTiles(2,2);

  

  function handleInput(e) {
    console.log("hu");
   
  }
/*   */
  return (
    <div onClick={e => console.log('onClick')}
      tabIndex={0} autoFocus={true} onKeyDown={e => {handleInput(e)}}  >
      <GfxEngine look={look} party={party} level={level} images={images} />
      <h1>Hello React..!</h1>
      <img src={images['dungFloorsTileset.png']}  />
      <button onClick={ () => look = "map" }> Map Look </button>
    </div>
     
  );
}

export default App;