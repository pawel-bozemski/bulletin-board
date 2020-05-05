import React from 'react';
import PropTypes from 'prop-types';
import styles from './NotFound.module.scss';
import Button from 'react-bootstrap/Button';

const Component = () => (
  <div className={styles.root}>
    <h2>Nothing to do here</h2>
    <Button variant="danger"href="/">
      Go back to the homepage
    </Button>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as NotFound,
  // Container as NotFound,
  Component as NotFoundComponent,
};
