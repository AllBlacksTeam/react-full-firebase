import React, { Component } from 'react';
import { connect } from 'react-redux';

class CarDetail extends Component {

    render() {

        if(!this.props.car) {
            return <div>Select car model.</div>
        }

        return(
            <div>
                <h3>Details for</h3>
                <div>{ this.props.car.model }</div>
                <div>{ this.props.car.color }</div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        car: state.activeCar
    };
}


export default connect(mapStateToProps)(CarDetail);
