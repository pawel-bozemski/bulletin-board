import React from 'react';
import PropTypes from 'prop-types';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Homepage.module.scss';

const mockData = [
  {
    id: 1,
    title: 'Seat leon 2015',
    name: 'Jonasz',
    phone: '54655487',
    location: 'Lublin',
    price: '2137',
    date: '05.05.2020',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/2016_SEAT_Leon_SE_Dynamic_Technology_1.2.jpg/800px-2016_SEAT_Leon_SE_Dynamic_Technology_1.2.jpg',
  },
  {
    id: 2,
    title: 'Merida bicycle',
    name: 'Janusz',
    phone: '54655487',
    state: 'used',
    location: 'swidnik',
    price: '545',
    date: '02.04.2020',
    img: 'https://www.bikko.pl/media/catalog/product/cache/1/image/b38cf51ec77170b109c5e310157197eb/2/9/29_1800-d_1_1.jpg',
  },
];

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <CardGroup>
      {mockData.map(post => (
        <Card className={styles.card_ad} key={post.id}>
          <Card.Img className={styles.card_img} variant="top" src={post.img} />
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>
              ${post.price}
            </Card.Text>
            <Card.Text>
              Seller: {post.name}
            </Card.Text>
            <Card.Text>
              City: {post.location}
            </Card.Text>
            <Card.Text>
              phone: {post.phone}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Published {post.date}</small>
          </Card.Footer>
        </Card>
      ))}
    </CardGroup>
    <Button className={styles.form_button}  size="lg" block variant="dark" type="submit">
      Add Post
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
  Component as Homepage,
  // Container as Homepage,
  Component as HomepageComponent,
};
