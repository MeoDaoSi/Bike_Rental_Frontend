import { useEffect } from "react";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";

import L from "leaflet";
import { useMap } from "react-leaflet";

declare module 'leaflet' {
    namespace Control {
        function geocoder(options?: any): any;
    }
}

const LeafletGeocoder = () => {
    const map = useMap();

    useEffect(() => {
        L.Control.geocoder({
            defaultMarkGeocode: false
        })
            .on('markgeocode', function (e: any) {
                const latLng = e.geocode.center;
                L.marker(latLng).addTo(map).bindPopup(e.geocode.name).openPopup();
                map.fitBounds(e.geocode.bbox);
            })
            .addTo(map);
    }, [])

    return null;
}

export default LeafletGeocoder
