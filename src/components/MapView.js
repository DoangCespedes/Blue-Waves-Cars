import React from 'react'
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { IconLocation } from './IconLocation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export const MapView = () => {
  return (
    <div>
        <MapContainer className='leaflet-container' center={{lat:-34.64557522351147, lon:-58.40144197153736}} zoom={20}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={{lat:-34.64557522351147, lon:-58.40144197153736}} icon={IconLocation}>
              <Popup>
                Blue-Waves-Cars. <br /> UBICACION<a href="https://www.google.com/maps/place/34%C2%B038'44.5%22S+58%C2%B024'05.5%22W/@-34.6456806,-58.4037086,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x4dce52213d7c52b9!8m2!3d-34.6456806!4d-58.4015199?hl=es"> <FontAwesomeIcon className="iconNav" icon={faLocationDot} /> </a>
              </Popup>
            </Marker>
        </MapContainer>
    </div>
  )
}
