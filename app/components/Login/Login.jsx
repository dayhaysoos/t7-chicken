import React from 'react';

export default class Login extends React.Component {

	handleClick(event) {
		console.log(this.props);
		const username = this.refs.username;
		const password = this.refs.password;
		const creds = { username: username.value.trim(), password: password.value.trim() }
		this.props.onLoginClick(creds);
	}

render() {
    const { errorMessage } = this.props

    return (
      <div>
        <input type='text' ref='username' placeholder='Username'/>
        <input type='password' ref='password' placeholder='Password'/>
        <button onClick={(event) => this.handleClick(event)} type="submit" className="btn btn-primary">
          Login
        </button>

        {errorMessage &&
          <p style={errorMessage}></p>
        }
      </div>
    )
  }
}
