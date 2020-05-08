import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Button from 'react-bootstrap/Button';


import { connect } from 'react-redux';
import { getAll } from '../../../redux/postsRedux.js';

import styles from './Post.module.scss';

const Component = ({className, posts, match}) => {
  return(
    <div className={clsx(className, styles.root)}>
      {posts.filter(post => post.id === match.params.id).map(post => (
        <Card key={post.id}>
          <Card.Img variant="top" src={post.img} />
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>
              {post.content}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Posted: {post.date}</ListGroupItem>
            <ListGroupItem>Seller: {post.name}</ListGroupItem>
            <ListGroupItem>Email: {post.email}</ListGroupItem>
            <ListGroupItem>Phone number: {post.phone}</ListGroupItem>
            <ListGroupItem>From: {post.location}</ListGroupItem>
            <ListGroupItem>${post.price}</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Button variant="primary" size="lg"  href={`/post/${post.id}/edit`} block>
              Edit Post
            </Button>
            <Button variant="secondary" href="/" size="lg" block>
              Go back
            </Button>
          </Card.Body>
        </Card>))}
    </div >
  );
};

Component.propTypes = {
  className: PropTypes.string,
  posts: PropTypes.node,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  })};

const mapStateToProps = state => ({
  posts: getAll(state),
});

const PostContainer = connect(mapStateToProps)(Component);

export {
  PostContainer as Post,
  Component as PostComponent,
};
