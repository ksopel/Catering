import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import "../scss/contact.scss"

export const ContactForm = () => {
    const form = useRef();

    const Styles = {
        fontSize: "23px",
        color: "white",
        fontFamily: "Arial, Helvetica, sans-serif",
    }

    const [submit, setSubmit] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_hhsjx14', 'template_5g0hz2q', form.current, 'o1hGRXUQdRYMwtBMa')
            .then((result) => {
                setSubmit('Message sent!!!')
            }, (error) => {
                setSubmit('Message not sent!!!')
            });
    };

    useEffect(() => {
        document.p = `${submit}`;
    })
    const handleClick = () => {
        setSubmit (()=> submit)
    }
    return (
        <>
        <form ref={form} onSubmit={sendEmail}>
            <label htmlFor="text">Imię:</label>
            <input type="text" name="user_name"/>

            <label htmlFor="email">Email:</label>
            <input name="user_email" id="email"/>

            <label htmlFor="textarea">Czym chcesz się z nami podzielić?</label>
            <textarea name="message"></textarea>

            <input type="submit" onClick={handleClick} value="Send" className="button" />
            <div style={Styles}>
                <p>
                    {submit}
                </p>
            </div>
        </form>
            </>

    );
};

export default ContactForm;


