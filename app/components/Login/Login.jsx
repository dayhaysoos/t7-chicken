import React from 'react';
import Auth0Lock from 'auth0-lock';

export const lock = new Auth0Lock('HkucS31m0XOG4lq2TRueJYPUPsq1hnNA', 'dayhaysoos.auth0.com');

lock.on('authenticated', result => { localStorage.token = result.idToken })

export default function Login () {
  return <a href="#" onClick={() => lock.show()}>Login</a>
}
