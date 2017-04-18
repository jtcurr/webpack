import React, { Component } from 'react';
import api from '../api';

export default class UsersComponents extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
  		users: []
  	};
  }

  componentDidMount() {
  	const users = api.getUsers();
  	this.setState({
  		users
  	});
  }

  render() {
  	const users = this.state.users.map((user, index) => {
  		const { name, dog } = user;
  		return <p key={ index }>{ index } - { name } has { dog }</p>;
  	});
  	  return (
  	  	<div>
  	  		{ users }
  	  	</div>
  	  );
  }
}