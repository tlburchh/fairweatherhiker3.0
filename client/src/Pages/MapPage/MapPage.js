import React, {Component} from 'react';
// import { render } from 'react-dom'
// import PropTypes from 'prop-types';
import './MapPage.css'
import HikingMap from '../../Components/HikingMap'

class MapPage extends Component  {
  constructor(props){
    super(props);
    this.state={
 
    }
   
  }
  

  render() {
 
  return (
    <div>
      <HikingMap />
    </div>
  );
  }
}


// render(<Map />, document.getElementById('container'))

export default MapPage;