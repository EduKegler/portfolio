import React from 'react';
import { useRefContext } from '../../components/app/App';
import Button from '../../components/button/Button';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import './contact.scss';

const Contact = React.memo(() => {
    const { contactRef } = useRefContext();

    return (
        <section ref={contactRef} className='contact'>
            <SectionTitle title='Contact' />
            <form className='contact-form'>
                Have a question or want to work together?
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Enter Email' />
                <textarea placeholder='Your message' />
                <Button>Test</Button>
            </form>
        </section>
    )
});

export default Contact;