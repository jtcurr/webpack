import React, { Component } from 'react';
import UsersComponent from './users/UsersComponent';
import FxRatesComponent from './fx/FxRatesComponent';

export default class MainComponent extends Component {

  constructor(props) {
  	super(props);
  }

  render() {
  	return (
      <div>
    		<div>
    		  <h1>Users</h1>
          <UsersComponent />
        </div>

        <div>
          <h1>Users</h1>
          <FxRatesComponent baseCurrency='USD'/>
        </div>
      </div>
    );
  }
}