import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';


class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term: ''};

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({term: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();

        // call API - action creator fetchWeather
        this.props.fetchWeather(this.state.term);

        // clear search input
        this.setState({term: ''});
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input value={this.state.term}
                       onChange={this.onInputChange}
                       className="form-control"
                       placeholder="Get a five-day forecast in your favorite cities"
                       type="text"/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}


function mapDispatchToProps(dispatch) {
    var actionCreators = {fetchWeather: fetchWeather};

    // Turns an object whose values are action creators, into an object with the same keys,
    // but with every action creator wrapped into a dispatch call so they may be invoked directly.
    return bindActionCreators(actionCreators, dispatch);
}

// Connects a React component to a Redux store.
export default connect(null, mapDispatchToProps)(SearchBar);