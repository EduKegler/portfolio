import React from 'react';
import { useRefContext } from '../../components/app/App';
import Button from '../../components/button/Button';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import './contact.scss';

const Contact = React.memo(() => {
    const { contactRef } = useRefContext();

    return (
        <section ref={contactRef} className='contact'>
            <div className='contact-container'>
                <SectionTitle title='CONTACT' />
                <form className='contact-form'>
                <span className='contact-title'>Have a question or want to work together?</span>
                <input type='text' placeholder='Name' />
                    <input type='email' placeholder='Enter Email' />
                    <textarea placeholder='Your message' />
                    <Button className='contact-submit'>SUBMIT</Button>
                </form>
            </div>
        </section>
    )
});

export default Contact;