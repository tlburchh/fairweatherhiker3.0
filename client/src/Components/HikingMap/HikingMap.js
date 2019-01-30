import React from 'react';
import {Map, TileLayer, Marker, Popup } from 'react-leaflet';
import LocateControl from '../LocateControl/';
import './HikingMap.css';

  
class HikingMap extends React.Component {
  constructor() {
    super()
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 13
    }
  }
  render() {
    const locateOptions = {
      position: 'topright',
      strings: {
          title: 'Show Current Location'
      },
      locateOptions: {
        maxZoom: 13
      },
      onActivate: () => {} // callback before engine starts retrieving locations
  }

    const position = [this.state.lat, this.state.lng];
    return (
      <Map className="container" center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br/> Easily customizable.
          </Popup>
        </Marker>
        <LocateControl options={locateOptions} startDirectly/>
      </Map>
    );
  }
}
 export default HikingMap;

