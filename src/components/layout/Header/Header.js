import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import styles from './Header.module.scss';

const Component = () => (
  <div className={styles.root}>
    <Navbar expand="lg" variant="light" bg="light">
      <Container className={styles.wrapper}>
        <Button className={styles.header_button} href="https://google.com" variant="outline-primary" size="lg">
            Login with Google
        </Button>
        <Button className={styles.header_button} href="/" variant="outline-info" size="lg">
            My posts
        </Button>
        <Button className={styles.header_button} href="/" variant="outline-danger" size="lg">
            Logout
        </Button>
      </Container>
    </Navbar>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as Header,
  Component as HeaderComponent,
};
