import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Style
// import styles from './About.css';

class About extends Component {
  render() {
    return (
      <div>
        <h1>Address: Some Address</h1>
        <h2>Street: Some Street</h2>
        <h2>City: Some City</h2>
        <h2>Contact: Contact details</h2>        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

About.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
