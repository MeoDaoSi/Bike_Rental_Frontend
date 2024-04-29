import './style.css'
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, useMap } from 'react-leaflet';
import { useState } from 'react';
import 'leaflet-routing-machine';
import LeafletRoutingMachine from './LeafletRoutingMachine';
// import LeafletGeocoder from './LeafletGeocoder';
import Locate from './Locate'
// import * as L from 'leaflet';

export const Map = () => {

    const markers: any[] = [
        {
            geocode: [10.0299, 105.7706],
            popUp: 'test',
        },
        {
            geocode: [10.0335, 105.7547],
            popUp: 'test',
        },
    ]

    return (
        <>
            <MapContainer
                center={[10.0452, 105.7469]}
                zoom={13}
                style={{ height: "100vh", width: "100%" }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                {
                    markers.map((marker, index) => {
                        return (
                            <Marker key={index} position={marker.geocode}>
                                <Popup className='map-popup-content'>
                                    <>
                                        <div className='left'>
                                            <img src='https://www.therentalbranch.com/assets/the-rental-branch-logo.png' />
                                        </div>
                                        <div className='right'>
                                            <b className='block'>Đây có gì hot?</b>
                                            Chi Nhánh Tại ...
                                        </div><div className='clearfix'></div>
                                    </>

                                </Popup>
                            </Marker>
                        )
                    })
                }
                <Locate />
                {/* <LocationMarker /> */}
                {/* <LeafletGeocoder /> */}
                <LeafletRoutingMachine />
            </MapContainer>
        </>
    )
}
