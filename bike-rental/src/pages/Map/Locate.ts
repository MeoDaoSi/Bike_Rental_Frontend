import { useLayoutEffect } from 'react';
import * as L from 'leaflet';
import 'leaflet.locatecontrol';
import 'leaflet.locatecontrol/dist/L.Control.Locate.css';
import { useMap } from 'react-leaflet';

const Locate = () => {

    const map = useMap();

    L.control
        .locate({
            position: "topleft",
            strings: {
                title: "Show me where I am, yo!"
            }
        })
        .addTo(map);

    return null
}

export default Locate
