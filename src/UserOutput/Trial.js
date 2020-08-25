import React from 'react'
import SearchForm from './Anop';

class Header extends React.Component {
    // ...
    render() {
    return (
    <div className="header">
    <div className="menuIcon">
    <div className="dashTop"></div>
    <div className="dashBottom"></div>
    <div className="circle"></div>
    </div>
    <span className="title">{this.props.title}</span>
    <SearchForm />
    {/* Adding an onClick handler to call the showSearch button
   */}
    <div
    className="fa fa-search searchIcon"
    ></div>
    </div>
    );
    }
   }
export default Header;   