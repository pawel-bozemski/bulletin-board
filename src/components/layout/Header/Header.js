import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Header.module.scss';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.wrapper}>
      <Button className={styles.header_button} href="https://google.com" variant="outlined" color="primary" size="large">
      Login with Google
      </Button>
      <Button className={styles.header_button} href="/" variant="outlined" color="primary" size="large">
      My ads
      </Button>
      <Button className={styles.header_button} href="/" variant="outlined" color="secondary" size="large">
      Logout
      </Button>
    </div>
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
  Component as Header,
  // Container as Header,
  Component as HeaderComponent,
};
