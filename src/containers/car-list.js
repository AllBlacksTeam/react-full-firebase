import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCars, selectCar } from '../actions/index';
import { bindActionCreators } from 'redux';


class CarList extends Component {

  componentWillMount() {
    this.props.getCars();
  }

  renderList() {
    return this.props.cars.map( (car) => { return(
      <li
        key={car.model}
        onClick={ () => this.props.selectCar(car) }
        className="list-group-item">
        {car.model}
      </li>
    );
    });
  }

  render() {
    return (
          <div className='car-list'>
            <ul className="list-group col-sm-4">
                { this.renderList() }
            </ul>
          </div>
        );
  }
}

function mapStateToProps (state) {
    //whatever is returned here will be retrieved as this.props in the BookList container
  return {
    cars: state.cars
  };

}

//selectBook will be a prop of the component BookList
function mapDispatchToProps (dispatch) {
    //whenever you call selectBook(), dispatch (transport) the results to all the reducers
  return bindActionCreators({ getCars: getCars, selectCar: selectCar }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(CarList);
