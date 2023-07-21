import React from 'react';
import ContactSection from '../components/contactForm';

const ContactRoute = ({ selectedBackground, selectedBackgroundColor}) => {
  return <ContactSection selectedBackground={selectedBackground} selectedBackgroundColor={selectedBackgroundColor}/>;
};

export default ContactRoute;
