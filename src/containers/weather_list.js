import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
    render() {
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature (K)</th>
                    <th>Pressure (hPa)</th>
                    <th>Humidity (%)</th>
                </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        );
    }
}

// The component will subscribe to Redux store updates. Any time it updates, mapStateToProps will be called
function mapStateToProps(state) {
    // Providing weather proprety, since we assigned WeatherReducer to weather property in reducers object
    return { weather: state.weather };
}

// Connects a React component to a Redux store.
// It does not modify the component class passed to it.
// Instead, it returns a new, connected component class, for you to use.
export default connect(mapStateToProps)(WeatherList);