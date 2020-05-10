/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { getAll, fetchPublished } from '../../../redux/postsRedux.js';
import { getUser } from '../../../redux/userRedux.js';
import styles from './Post.module.scss';

class Component extends React.Component {
  componentDidMount() {
    const {fetchPublishedPosts} = this.props;
    fetchPublishedPosts();
  }
  render() {
    const {className, posts, user, match} = this.props;
    console.log('posts', posts[0]);
    return (
      <div className={clsx(className, styles.root)}>
        {posts.filter(post => post._id === match.params.id).map(post => (
          <Card key={post.id}>
            {post.photo === null ? '' : <Card.Img className={styles.card_img} variant="top" src={post.img} />}
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>
                {post.content}
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Posted: {post.created}</ListGroupItem>
              <ListGroupItem>Email: {post.author}</ListGroupItem>
              <ListGroupItem>Phone number: {post.phone}</ListGroupItem>
              {post.location === '' ? '' : <ListGroupItem>{post.location}</ListGroupItem>}
              <ListGroupItem>From: {post.location}</ListGroupItem>
              {post.price < 0 ? <ListGroupItem>${post.price}</ListGroupItem> : ''}
            </ListGroup>
            <Card.Body>
              {user.isLogged ?
                <Button variant="primary" size="lg"  href={`/post/${post.id}/edit`} block>
              Edit Post
                </Button>
                : ''}
              <Button variant="secondary" href="/" size="lg" block>
              Go back
              </Button>
            </Card.Body>
          </Card>))}
      </div >
    );}
}

Component.propTypes = {
  className: PropTypes.string,
  posts: PropTypes.node,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
  user:PropTypes.object,
};

const mapStateToProps = state => ({
  posts: getAll(state),
  user: getUser(state),
});

const mapDispatchToProps = dispatch => ({
  fetchPublishedPosts: () => dispatch(fetchPublished()),
});

const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  PostContainer as Post,
  Component as PostComponent,
};
