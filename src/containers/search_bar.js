import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
constructor(props){
  super(props);

  this.state = {
    term: ''
  };
  this.onInputChange = this.onInputChange.bind(this);
  this.onFormSubmit = this.onFormSubmit.bind(this);
}

  render() {

    return (
      <form onSubmit= { this.onFormSubmit } className="input-group">
      <input value={this.state.term} onChange= {this.onInputChange} placeholder="Forecast for a location" className="form-control" />
      <span className="input-group-btn">
      <button type="submit" className="btn btn-secondary">Submit</button>
      </span>
      </form>

    );
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});
  }


  onInputChange(event){
    this.setState({term:event.target.value});
  }
}


  function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null,mapDispatchToProps)(SearchBar);
