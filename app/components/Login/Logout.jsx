import React from 'react'

export default class Logout extends React.Component {

  render() {
    const { onLogoutClick } = this.props

    return (
			<li>
				<button onClick={() => onLogoutClick()} className="btn btn-primary">Logout</button>
			</li>
    )
  }

}
