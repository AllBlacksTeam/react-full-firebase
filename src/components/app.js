import React, { Component } from 'react';

import CarList from '../containers/car-list';
import CarDetail from '../containers/car-detail';

export default class App extends Component {
  render() {
    return (
      <div style={{marginTop: '100px'}}>
        <CarList />
        <CarDetail />
      </div>
    );
  }
}
