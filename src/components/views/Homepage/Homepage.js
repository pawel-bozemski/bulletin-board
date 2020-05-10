import React from 'react';
import PropTypes from 'prop-types';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { getAll, fetchPublished } from '../../../redux/postsRedux.js';


import clsx from 'clsx';
import styles from './Homepage.module.scss';
import { getUser } from '../../../redux/userRedux.js';


class Component extends React.Component {
  componentDidMount() {
    const {fetchPublishedPosts} = this.props;
    fetchPublishedPosts();
  }
  render() {
    const {className, posts, user} = this.props;
    return (
      <div className={clsx(className, styles.root)}>
        <CardGroup>
          {posts.map(post => (
            <Card className={styles.card_ad} key={post.id}>
              {post.photo === null ? '' : <Card.Img className={styles.card_img} variant="top" src={post.img} />}
              <Card.Body>
                <Card.Title><a href={`/post/${post._id}`}>{post.title}</a></Card.Title>
                {post.price < 0 ? <Card.Text>${post.price}</Card.Text>: ''}
                <Card.Text> By: {post.author} </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Published {post.created}</small>
              </Card.Footer>
            </Card>
          ))}
        </CardGroup>
        {user.isLogged ?
          <Button className={styles.form_button} href='post/add'size="lg" block variant="dark" type="submit">
      Add Post
          </Button>
          : ''}
      </div>
    );}
}

Component.propTypes = {
  className: PropTypes.string,
  posts: PropTypes.array,
  user: PropTypes.object,
  fetchPublishedPosts: PropTypes.func,
};

const mapStateToProps = state => ({
  posts: getAll(state),
  user: getUser(state),
});

const mapDispatchToProps = dispatch => ({
  fetchPublishedPosts: () => dispatch(fetchPublished()),
});

const HomepageContainer = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  HomepageContainer as Homepage,
  Component as HomepageComponent,
};
