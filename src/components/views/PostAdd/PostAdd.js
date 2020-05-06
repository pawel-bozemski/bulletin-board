import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './PostAdd.module.scss';

const Component = ({className}) => (
  <div className={clsx(className, styles.root)}>
    <Form className={styles.form}>
      <Form.Row className={styles.form_row}>
        <Col lg={4} className={styles.col_title}>
          <Form.Group controlId="epostName">
            <Form.Label>Your name</Form.Label>
            <Form.Control required type="text" placeholder="John Doe" />
            <Form.Text className="text-muted">
              Type Your name
            </Form.Text>
          </Form.Group>
        </Col>
        <Col lg={4} className={styles.col_title}>
          <Form.Group controlId="postLocation">
            <Form.Label>Location</Form.Label>
            <Form.Control required type="text" placeholder="Enter Location" />
            <Form.Text className="text-muted">
              Type your location
            </Form.Text>
          </Form.Group>
        </Col>
      </Form.Row>
      <Form.Row className={styles.form_row}>
        <Col lg={4} className={styles.col_title}>
          <Form.Group controlId="postPhone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control required type="text" placeholder="Enter phone number" />
            <Form.Text className="text-muted">
              Type your phone number
            </Form.Text>
          </Form.Group>
        </Col>
        <Col lg={4} className={styles.col_title}>
          <Form.Group controlId="postEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control required type="email" placeholder="name@example.com" />
            <Form.Text className="text-muted">
              Enter your e-mail address
            </Form.Text>
          </Form.Group>
        </Col>
      </Form.Row>
      <Form.Row className={styles.form_row}>
        <Col lg={8} className={styles.col_title}>
          <Form.Group controlId="postTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control required type="text" placeholder="Enter Title" />
            <Form.Text className="text-muted">
              What are you offering ?
            </Form.Text>
          </Form.Group>
        </Col>
        <Col lg={8} className={styles.col_title}>
          <Form.Group controlId="postForm">
            <Form.Label>What is state of item you are selling</Form.Label>
            <Form.Control as="select">
              <option>new</option>
              <option>used</option>
              <option>broken</option>
              <option>in parts</option>
              <option>other</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col lg={8} className={styles.col_title}>
          <Form.Group controlId="postContent">
            <Form.Label>Describe your product </Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
        </Col>
        <Col lg={4} className={styles.col_title}>
          <Form.Group controlId="postPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control required type="text" placeholder="Enter price" />
            <Form.Text className="text-muted">
            Type price, for free item type 0
            </Form.Text>
          </Form.Group>
        </Col>
        <Col lg={4} className={styles.col_title}>
          <Form.Group controlId="postDelivery">
            <Form.Label>Shipping</Form.Label>
            <Form.Control as="select">
              <option>Only pickup</option>
              <option>After payment</option>
              <option>Only Cash on delivery</option>
              <option>All options possible</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Form.Row>
      <Button className={styles.form_button}  size="lg" block variant="dark" type="submit">
        Add Post
      </Button>
    </Form>
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
  Component as PostAdd,
  // Container as PostAdd,
  Component as PostAddComponent,
};
