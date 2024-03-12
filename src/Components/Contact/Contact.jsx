import './Contact.css';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { validateEmail } from '../../Utils/Helpers';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import KrisKurzawaPic from '/KrisKurzawa6.png';
import { icons } from '../../assets/data/SMIcons';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setErrorMessage('Please Enter A Valid Email');
            return;
        }

        const serviceId = 'service_7z3rq0t';
        const templateId = 'template_cq7z9hc';
        const publicKey = 'B2PCc5s-Jybuu2Tck';

        const templateParams = {
            from_name: name,
            subject: subject,
            message: message,
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully!', response);
                alert(`Thank you for your email ${name}!  I will get back to you soon!`);
                setName('');
                setEmail('');
                setSubject('');
                setMessage('');
                setErrorMessage('');
            })
            .catch((error) => {
                console.error('Error:', error)
            })
        console.log(templateParams);
    }

    return (
        <main id='Contact' className='flex flex-col items-center'>
            <h2 className="text-3xl font-bold lg:text-3xl mt-5">Drop Me a Line</h2>
            <article className='pic-form-container flex flex-col lg:items-none lg:flex lg:flex-row lg:justify-evenly'>
                <LazyLoadImage src={KrisKurzawaPic} className='kris mt-2  w-[65%] h-[65%] lg:w-[50%] lg:h-[50%] m-5 lg:mx-10' />
                <form onSubmit={handleSubmit} className='emailForm flex flex-col content-center mt-2 m-5 lg:mx-10 w-[65%] h-[65%] lg:w-[50%] lg:h-[50%]'>
                    <input
                        className='input'
                        type='text'
                        placeholder='Your Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        className='input'
                        type='email'
                        placeholder='Your Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        className='input'
                        type='subject'
                        placeholder='Subject'
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                    <textarea
                        className='input'
                        cols='30'
                        rows='5'
                        placeholder='Message'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    >
                    </textarea>
                    <button className='submit-btn w-32 lg:w-32' type='submit'>Submit</button>
                    {errorMessage && (
                        <article>
                            <p className="error-tex text-center text-2xl lg:text-4xl mb-5">{errorMessage}</p>
                        </article>
                    )}
                    <article className='flex flex-row justify-evenly'>
                        <h2> <a href='mailto:kurzawa1@yahoo.com'>Email Me</a></h2>
                        <h2><a href='tel:2485682806'>Call Me</a></h2>
                    </article>
                </form>
            </article>
            <article className='flex'>
                {icons.map((item) => (
                    <i key={item.id} className='text-xl p-3 lg:text-5xl lg:p-7'><a href={item.link} target='__blank'>{item.symbol}</a></i>
                ))}
            </article>
        </main>
    )
}

export default Contact