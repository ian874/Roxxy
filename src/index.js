import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RoxxyMotelImage from './assets/RoxxyMotel.png';
import Roxxy1 from './assets/Roxxy1.jpg';
import Roxxy2 from './assets/Roxxy2.jpg';
import Roxxy3 from './assets/Roxxy3.jpg';
import RoxxyRestaurant from './assets/RoxxyRestaurant.jpg';
import Ugali from './assets/Ugali.jpg';
import Last from './assets/last.jpg';
import Last1 from './assets/last1.jpg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showComingSoon: false };
    this.handleLinkClick = this.handleLinkClick.bind(this);
  }

  handleLinkClick() {
    this.setState({ showComingSoon: true });
    setTimeout(() => this.setState({ showComingSoon: false }), 2000);
  }

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(Header, { onLinkClick: this.handleLinkClick }),
      React.createElement(Hero, { backgroundImage: RoxxyMotelImage }),
      React.createElement(Offers, { images: [Roxxy1, Roxxy2, Roxxy3] }),
      React.createElement(About, { image: RoxxyRestaurant }),
      React.createElement(Food, { image: Ugali }),
      React.createElement(Reservation),
      React.createElement(Rooms),
      React.createElement(Footer, { onLinkClick: this.handleLinkClick }),
      this.state.showComingSoon &&
        React.createElement(
          'div',
          { className: 'coming-soon-message' },
          'Coming Soon'
        )
    );
  }
}

class Header extends React.Component {
  render() {
    return React.createElement(
      'header',
      null,
      React.createElement(
        'nav',
        null,
        React.createElement(
          'a',
          { onClick: this.props.onLinkClick, className: 'nav-active' },
          'Home'
        ),
        React.createElement(
          'a',
          { onClick: this.props.onLinkClick },
          'Rooms'
        ),
        React.createElement(
          'a',
          { onClick: this.props.onLinkClick },
          'About'
        ),
        React.createElement(
          'a',
          { onClick: this.props.onLinkClick },
          'Pages'
        ),
        React.createElement(
          'a',
          { onClick: this.props.onLinkClick },
          'Contact'
        )
      ),
      React.createElement(
        'div',
        { className: 'header-logo' },
        React.createElement(
          'span',
          { className: 'boxed-r' },
          'R'
        ),
        React.createElement(
          'span',
          { className: 'motel-text' },
          'Roxxy Motel'
        )
      ),
      React.createElement(
        'div',
        { className: 'nav-social' },
        React.createElement(
          'a',
          { href: '#' },
          React.createElement(
            'svg',
            { className: 'w-6 h-6', fill: 'currentColor', viewBox: '0 0 24 24' },
            React.createElement('path', { d: 'M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.494v-9.294H9.691v-3.621h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.621h-3.12V24h6.116c.732 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z' })
          )
        ),
        React.createElement(
          'a',
          { href: '#' },
          React.createElement(
            'svg',
            { className: 'w-6 h-6', fill: 'currentColor', viewBox: '0 0 24 24' },
            React.createElement('path', { d: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .385.045.761.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.733-.674 1.586-.674 2.492 0 1.717.873 3.233 2.2 4.122-.807-.026-1.566-.248-2.228-.616v.062c0 2.385 1.693 4.374 3.946 4.827-.413.112-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.396 0-.785-.023-1.168-.067 2.167 1.394 4.743 2.209 7.501 2.209 9.013 0 13.934-7.468 13.934-13.934 0-.211-.005-.422-.014-.631.957-.693 1.786-1.56 2.437-2.549z' })
          )
        ),
        React.createElement(
          'a',
          { href: '#' },
          React.createElement(
            'svg',
            { className: 'w-6 h-6', fill: 'currentColor', viewBox: '0 0 24 24' },
            React.createElement('path', { d: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' })
          )
        ),
        React.createElement(
          'button',
          { className: 'book-button' },
          'Book A Room'
        )
      )
    );
  }
}

const Hero = ({ backgroundImage }) =>
  React.createElement(
    'section',
    { className: 'hero', style: { backgroundImage: `url(${backgroundImage})` } },
    React.createElement(
      'div',
      { className: 'hero-content' },
      React.createElement(
        'div',
        { className: 'hero-title' },
        'Roxxy Motel'
      ),
      React.createElement(
        'p',
        { className: 'hero-subtitle' },
        'Unlock to enjoy the view of Martine'
      )
    )
  );

const Offers = ({ images }) =>
  React.createElement(
    'section',
    { className: 'section' },
    React.createElement(
      'h2',
      { className: 'section-title' },
      'Ongoing Offers'
    ),
    React.createElement(
      'div',
      { className: 'offers-grid' },
      images.map((image, index) =>
        React.createElement(
          'div',
          { key: index, className: 'offer-card' },
          React.createElement('img', { src: image, alt: `Offer ${index + 1}`, className: 'offer-image' }),
          React.createElement(
            'button',
            { className: 'learn-more' },
            'Book Now'
          )
        )
      )
    )
  );

const About = ({ image }) =>
  React.createElement(
    'section',
    { className: 'section about-section' },
    React.createElement(
      'div',
      { className: 'about-content' },
      React.createElement(
        'h2',
        { className: 'section-title' },
        'A Luxurious Hotel'
      ),
      React.createElement(
        'p',
        { style: { color: '#4b5563' } },
        'Placeholder text for description. More details coming soon.'
      ),
      React.createElement(
        'button',
        { className: 'learn-more' },
        'Learn More'
      )
    ),
    React.createElement(
      'div',
      { className: 'about-content' },
      React.createElement('img', { src: image, alt: 'Luxurious Hotel', className: 'about-image' })
    )
  );

const Food = ({ image }) =>
  React.createElement(
    'section',
    { className: 'section food-section' },
    React.createElement(
      'div',
      { className: 'food-content' },
      React.createElement('img', { src: image, alt: 'Fresh and Delicious Food', className: 'food-image' })
    ),
    React.createElement(
      'div',
      { className: 'food-content' },
      React.createElement(
        'p',
        { className: 'food-label' },
        'Delicious Food'
      ),
      React.createElement(
        'h2',
        { className: 'section-title' },
        'We Serve Fresh and Delicious Food'
      ),
      React.createElement(
        'p',
        { style: { color: '#4b5563' } },
        'Placeholder text for food description. More details coming soon.'
      ),
      React.createElement(
        'button',
        { className: 'learn-more' },
        'Learn More'
      )
    )
  );

const Reservation = () =>
  React.createElement(
    'section',
    { className: 'section' },
    React.createElement(
      'h2',
      { className: 'section-title' },
      'For Reservation or Query?'
    ),
    React.createElement(
      'button',
      { className: 'reservation-button' },
      '0712345678'
    )
  );

const Rooms = () =>
  React.createElement(
    'section',
    { className: 'section' },
    React.createElement(
      'p',
      { style: { color: '#3b82f6', fontSize: '14px', textAlign: 'center' } },
      'Featured Rooms'
    ),
    React.createElement(
      'h2',
      { className: 'section-title' },
      'Choose a Better Room'
    ),
    React.createElement(
      'div',
      { className: 'rooms-grid' },
      [Last, Last1].map((image, index) =>
        React.createElement(
          'div',
          { key: index, className: 'room-card' },
          React.createElement('img', { src: image, alt: `Room ${index + 1}`, className: 'room-image' })
        )
      )
    )
  );

const Footer = (props) =>
  React.createElement(
    'footer',
    null,
    React.createElement(
      'div',
      { className: 'footer-section' },
      React.createElement(
        'h3',
        null,
        'Address'
      ),
      React.createElement(
        'p',
        null,
        'Port Victoria, Busia County'
      ),
      React.createElement(
        'a',
        { href: '#', style: { marginTop: '8px', borderBottom: '2px solid #fff', background: 'none', color: '#fff', textDecoration: 'none' } },
        'Get Direction'
      )
    ),
    React.createElement(
      'div',
      { className: 'footer-section' },
      React.createElement(
        'h3',
        null,
        'Reservation'
      ),
      React.createElement(
        'p',
        null,
        '0712345678'
      ),
      React.createElement(
        'p',
        null,
        'reservation@roxxy.com'
      )
    ),
    React.createElement(
      'div',
      { className: 'footer-section' },
      React.createElement(
        'h3',
        null,
        'Navigation'
      ),
      React.createElement(
        'ul',
        null,
        React.createElement(
          'li',
          null,
          React.createElement(
            'a',
            { onClick: props.onLinkClick },
            'Home'
          )
        ),
        React.createElement(
          'li',
          null,
          React.createElement(
            'a',
            { onClick: props.onLinkClick },
            'Rooms'
          )
        ),
        React.createElement(
          'li',
          null,
          React.createElement(
            'a',
            { onClick: props.onLinkClick },
            'About'
          )
        ),
        React.createElement(
          'li',
          null,
          React.createElement(
            'a',
            { onClick: props.onLinkClick },
            'News'
          )
        )
      )
    ),
    React.createElement(
      'div',
      { className: 'footer-section' },
      React.createElement(
        'h3',
        null,
        'Newsletter'
      ),
      React.createElement(
        'p',
        { style: { marginBottom: '8px' } },
        'Subscribe newsletter to get updates'
      ),
      React.createElement(
        'div',
        { style: { display: 'flex' } },
        React.createElement(
          'input',
          { type: 'email', placeholder: 'Enter your mail', className: 'newsletter-input' }
        ),
        React.createElement(
          'button',
          { className: 'newsletter-button' },
          'Sign Up'
        )
      )
    )
  );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
