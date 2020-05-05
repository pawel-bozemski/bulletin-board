import React from 'react';
import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import styles from './NotFound.module.scss';

const Component = ({className}) => (
  <div className={clsx(className, styles.root)}>
    <Typography className={styles.root}>
      <h2>Nothing to do here</h2>
      <Button>
        <Link href="/">
          Go back to the homepage
        </Link>
      </Button>
    </Typography>
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
