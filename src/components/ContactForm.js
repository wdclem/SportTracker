import React, { useState } from 'react';
import NavBar from './navBar';

const ContactForm = ({ selectedBackground, selectedBackgroundColor}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();


    setName('');
    setEmail('');
    setMessage('');

  };

return (
    <section className="bg-gradient-to-r from-orange-200 via-yellow-200 to-yellow-100">
        <NavBar/>
      <div className="max-h-[66vh] py-8 lg:py-16 px-4 mx-auto max-w-screen-md overflow-y-auto">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-[#462720]">Contact Us</h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-[#462720] sm:text-xl">Got a technical issue? Want to send feedback about a feature? Let us know.</p>
          <form action="#" className="space-y-8">
              <div>
                  <label for="email" className="block mb-2 text-sm font-medium text-[#1B5F32]">Your email</label>
                  <input type="email" id="email" className="shadow-sm border text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" placeholder="name@flowbite.com" required/>
              </div>
              <div>
                  <label for="subject" className="block mb-2 text-sm font-medium text-[#1B5F32]">Subject</label>
                  <input type="text" id="subject" className="block p-3 w-full text-sm rounded-lg border shadow-sm bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" placeholder="Let us know how we can help you" required/>
              </div>
              <div className="sm:col-span-2">
                  <label for="message" className="block mb-2 text-sm font-medium text-[#1B5F32]">Your message</label>
                  <textarea id="message" rows="6" className="block p-2.5 w-full text-sm rounded-lg shadow-sm border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
              </div>
              <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-[#38C968]rounded-lg sm:w-fit hover:bg-primary-800 bg-primary-600 hover:bg-primary-700 focus:ring-primary-800">Send message</button>
          </form>
      </div>
    </section>
    )
}

export default ContactForm;