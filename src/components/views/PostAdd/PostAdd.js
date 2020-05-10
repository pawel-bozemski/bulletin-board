/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import clsx from 'clsx';
import uniqid from 'uniqid';
import { connect } from 'react-redux';
import { getAll, addPost } from '../../../redux/postsRedux.js';

import styles from './PostAdd.module.scss';

const day = new Date().getDate();
const month = new Date().getMonth();
const year = new Date().getFullYear();
const date = day + '/' + month + '/' + year;

class Component extends React.Component {
state = {
  post: {
    id: uniqid(),
    created: date,
    title: '',
    location: '',
    text: '',
    name: '',
    phone: '',
    author: '',
    price: '',
    status: 'published',
  },
}


handleChange = (e, name) => {
  const { post } = this.state;

  this.setState({ post: { ...post, [name]: e.target.value } });
};
B
  handleSubmit = (e) => {
    const { post } = this.state;
    const { addPost } = this.props;
    e.preventDefault();
    addPost(post);
    console.log('post', post);
  };
  render() {
    const {handleSubmit } = this;
    const { post, className } = this.props;

    return(
      <div className={clsx(className, styles.root)}>
        <Form className={styles.form}  onSubmit={handleSubmit}>
          <Form.Row className={styles.form_row}>
            <Col lg={4} className={styles.col_title}>
              <Form.Group controlId="epostName">
                <Form.Label>Your name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="John Doe"
                  value={post.name}
                  onChange={e => this.handleChange(e, 'name')}
                />
                <Form.Text className="text-muted">
              Type Your name
                </Form.Text>
              </Form.Group>
            </Col>
            <Col lg={4} className={styles.col_title}>
              <Form.Group controlId="postLocation">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  required type="text"
                  placeholder="Enter Location"
                  value={post.location}
                  onChange={e => this.handleChange(e, 'location')}
                />
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
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter phone number"
                  value={post.phone}
                  onChange={e => this.handleChange(e, 'phone')}
                />
                <Form.Text className="text-muted">
              Type your phone number
                </Form.Text>
              </Form.Group>
            </Col>
            <Col lg={4} className={styles.col_title}>
              <Form.Group controlId="postEmail">
                <Form.Label>E-mail</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="name@example.com"
                  value={post.author}
                  onChange={e => this.handleChange(e, 'author')}
                />
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
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter Title"
                  value={post.title}
                  onChange={e => this.handleChange(e, 'title')}
                />
                <Form.Text className="text-muted">
              What are you offering ?
                </Form.Text>
              </Form.Group>
            </Col>
            <Col lg={8} className={styles.col_title}>
              <Form.Group controlId="postContent">
                <Form.Label>Describe your product </Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  rows="3"
                  value={post.text}
                  onChange={e => this.handleChange(e, 'text')}
                />
              </Form.Group>
            </Col>
            <Col lg={8} className={styles.col_title}>
              <Form.Group controlId="postImg">
                <Form.Label>Add photolink</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="paste link here"
                  value={post.photo}
                  onChange={e => this.handleChange(e, 'photo')}
                />
              </Form.Group>
            </Col>

            <Col lg={4} className={styles.col_title}>
              <Form.Group controlId="postPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  required
                  type="number"
                  placeholder="Enter price"
                  value={post.price}
                  onChange={e => this.handleChange(e, 'price')}
                />
                <Form.Text className="text-muted">
            Type price
                </Form.Text>
              </Form.Group>
            </Col>
          </Form.Row>
          <Button
            className={styles.form_button}
            size="lg"
            block
            variant="dark"
            type="submit"
          >
        Add Post
          </Button>
        </Form>
      </div>
    );
  }
}

Component.propTypes = {
  className: PropTypes.string,
  addPost: PropTypes.func,
};

const mapStateToProps = state => ({
  post: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  addPost: post => dispatch(addPost(post)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as PostAdd,
  Component as PostAddComponent,
};
