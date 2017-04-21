import React, { Component } from 'react';
import api from '../../apis/users';
require('./style');

export default class UsersComponents extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
  		users: []
  	};
  };

  componentDidMount() {
  	const users = api.getUsers();
  	this.setState({
  		users
  	});
  };

  render() {
  	const users = this.state.users.map((user, index) => {
  		const { name, dog } = user;
  		return (<p key={ index }><span className='badge'>{ index }</span> - { name } has { dog }</p>);
  	});
  	  return (
  	  	<div id='userContainer'>
        <i className="fa fa-eyedropper" aria-hidden="true">
  	  		{ users }
        </i>
  	  	</div>
  	  );
  };
}