import React, { Component } from 'react';
import { connect } from 'react-redux';
import FontIcon from 'material-ui/FontIcon';
import { Link } from 'react-router';

// css styles
const liStyles = {
    paddingLeft: 25
};
const iconStyles = {
    color: 'white',
    fontSize: 38,
    float:'right'
};

// create nav list
class UserNav extends Component {
    logout() {
        // this.props.dispatch(logout());
    }

    render() {
        return (
            <nav>
                <ul>
                    {/* <li style={liStyles}><Link to="/myAccount"><FontIcon className="material-icons" style={iconStyles}>person</FontIcon></Link></li>
                    <li style={liStyles}><Link to="/cart"><FontIcon className="material-icons" style={iconStyles}>shopping_cart</FontIcon></Link></li> */}
                    <li style={liStyles}><Link to="/"><FontIcon onClick={this.logout.bind(this)} className="material-icons" style={iconStyles}>power_settings_new</FontIcon></Link></li>
                </ul>
            </nav>
        );
    }
};
export default connect((store) => {
    return {};
})(UserNav);