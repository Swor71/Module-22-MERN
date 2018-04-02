import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Style
// import styles from './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Welcome to this marvelous blog</h2>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero culpa ex perferendis, doloribus architecto nemo, vero deserunt inventore voluptatum nesciunt magnam maxime amet nisi iure odit magni? Tempore, id quam.</p>
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

Home.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
