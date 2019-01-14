import React, {Component} from 'react';
// import { render } from 'react-dom'
// import PropTypes from 'prop-types';
import './MapPage.css'
import Map from '../../Components/Map'

class MapPage extends Component  {
  constructor(props){
    super(props);
    this.state={
 
    }
   
  }
  

  render() {
 
  return (
    <div id='container'>
      <Map />
    </div>
  );
  }
}


// render(<Map />, document.getElementById('container'))

export default MapPage