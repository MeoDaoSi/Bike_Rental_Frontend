import { useEffect, useLayoutEffect, useState } from "react";
import L from 'leaflet'
import { useMap } from "react-leaflet";
import 'leaflet-routing-machine'
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";

declare module 'leaflet' {
    namespace Control {
        function geocoder(options?: any): any;
    }
}

const init = {
    lat: 0,
    lng: 0
}

const LeafletRoutingMachine = () => {

    const [position, setPosition] = useState(init)
    const map = useMap();

    useLayoutEffect(() => {
        map.on('locationfound', function (e) {
            // console.log('User location:', e.latlng);
            setPosition(e.latlng)
            // You can do something with the user's location here
        });
    }, [])

    useEffect(() => {

        map.on('click', function (e) {
            console.log(position);

            L.Routing.control({
                waypoints: [
                    L.latLng(position?.lat, position?.lng),
                    L.latLng(e.latlng.lat, e.latlng.lng)
                ],
                lineOptions: {
                    styles: [
                        {
                            color: "blue",
                            weight: 4,
                            opacity: 0.7
                        }
                    ],
                    extendToWaypoints: true,
                    missingRouteTolerance: 100
                },
            }).addTo(map);
        })
    }, [position])

    return null;
}

export default LeafletRoutingMachine