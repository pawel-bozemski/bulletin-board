import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import styles from './Header.module.scss';
import { connect } from 'react-redux';
import { getUser } from '../../../redux/userRedux.js';


const Component = (user) =>  {
  return (
    <div className={styles.root}>
      <Navbar expand="lg" variant="light" bg="light">
        <Container className={styles.wrapper}>

          {user.user.isLogged ?
            <div>
              <Button className={styles.header_button} href="/" variant="outline-info" size="lg">
            My posts
              </Button>
              <Button className={styles.header_button} href="/" variant="outline-danger" size="lg">
            Logout
              </Button>
            </div>
            :
            <Button className={styles.header_button} href="https://google.com" variant="outline-primary" size="lg">
            Login with Google
            </Button>
          }
        </Container>
      </Navbar>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
};

const mapStateToProps = state => ({
  user: getUser(state),
});

const HeaderContainer = connect(mapStateToProps)(Component);

export {
  HeaderContainer as Header,
  Component as HeaderComponent,
};
