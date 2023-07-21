import React from 'react';
import ContactSection from '../components/ContactForm';

const ContactRoute = ({ selectedBackground, selectedBackgroundColor}) => {
  return <ContactSection selectedBackground={selectedBackground} selectedBackgroundColor={selectedBackgroundColor}/>;
};

export default ContactRoute;
