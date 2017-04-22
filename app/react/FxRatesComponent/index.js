import React, { Component } from 'react';
import api from '../../apis/users';
require('./style');

export default class FxRatesComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			fixerResponse: []
		};
	};

	componentDidMount() {
		api.getFXRates(this.props.baseCurrency, fixerResponse => {
			this.setState({
				fixerResponse
			});
		});

	};

	render() {
		let dailyRates = [];
		const { fixerResponse: { rates } } = this.state;
		const { fixerResponse: { date } } = this.state;

		const { baseCurrency } = this.props;

		for(const currency in rates) {
			const rate = rates[currency];
			dailyRates.push(<li className='list-group-item' key={ currency }>{ currency } - { rate } </li>);
		}

		return (
      <div id='fxContainer'>
      <h2> Base { baseCurrency } Date { date }</h2>
      <ul className='list-group'>
      { dailyRates }
      </ul>
      </div>
		);
	};


}