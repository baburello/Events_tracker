import React from 'react'
import BtnClick from '../BtnClick'
import './Map.css'
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import icon from '../../../node_modules/leaflet/dist/images/marker-icon-2x.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import L from 'leaflet';


let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;



function Map() {

    const position = [41.31, 69.2401]
    const position2 = [41.29, 69.2450]
  const position3 = [41.33, 69.23]
  const position4 = [41.31, 69.255]
  const position5 = [41.298, 69.22]
  return (
    <div className='MapWrapper'>
      <div className="btnContainer">
        <h2>Карта</h2>
        <BtnClick />
        </div>

          <div id="map">
              
          <MapContainer className='MapCont' center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        Toshkent, Uzbekistan <br /> Test Location 1
      </Popup>
    </Marker>
    <Marker position={position2}>
      <Popup>
        Toshkent, Uzbekistan <br /> Test Location 2
      </Popup>
    </Marker>
    <Marker position={position3}>
      <Popup>
        Toshkent, Uzbekistan <br /> Test Location 3
      </Popup>
    </Marker>
    <Marker position={position4}>
      <Popup>
        Toshkent, Uzbekistan <br /> Test Location 4
      </Popup>
    </Marker>
    <Marker position={position5}>
      <Popup>
        Toshkent, Uzbekistan <br /> Test Location 5
      </Popup>
    </Marker>
  </MapContainer>
              
        </div>
    </div>
  )
}

export default Map
