import React from 'react';


export default class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Search..." />
      </form>
    );
  }
}