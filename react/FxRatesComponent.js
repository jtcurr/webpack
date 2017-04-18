import React, { Component } from 'react';
import api from '../api';

export default class FxRatesComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			rates: {}
		}
	}

	render() {
    let rate = api.getFXRates();
		componentDidMount() {
      this.setState({
      	rates: rate
      })
		}
		
	}


}