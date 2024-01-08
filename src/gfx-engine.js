import React from "react";
import MapLook from "./looks/map/map-look.js";

export default function GfxEngine({look, party,level, images}) {
    let lookElement;
    if (look === "map") {
        lookElement = <MapLook party={party} level={level} gfx={images}/>;
    }
    return (
        <div>
            {lookElement}
        </div>
);
}