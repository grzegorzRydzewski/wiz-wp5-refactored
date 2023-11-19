import React from "react";
import MapLook from "./looks/map/map-look.js";

export default function GfxEngine({look, images}) {
    let lookElement;
    if (look === "map") {
        lookElement = <MapLook gfx={images}/>;
    }
    return (
        <div>
            {lookElement}
        </div>
);
}