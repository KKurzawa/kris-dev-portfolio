import './Contact.css';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { validateEmail } from '../../Utils/Helpers';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import KrisKurzawaPic from '/KrisKurzawa6.png';
// import { icons } from '../../assets/data/SMIcons';

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
            <article className='pic-form-container flex flex-col lg:items-none lg:flex lg:flex-row lg:justify-evenly h-[28rem]'>
                <div className='pic-container bg-[#980D1C] w-[65%] h-[65%] lg:w-1/3 lg:h-[100%] flex flex-col justify-center items-center'>
                    <LazyLoadImage src={KrisKurzawaPic} className='kris w-10/12 h-auto' />
                    <div className='flex justify-evenly p-2 w-full text-[#eed29b]'>
                        <button className='res-btn text-md'><a href='/KrisKurzawaResume.pdf' target='__blank'>View My Resume</a></button>
                        <button className='res-btn text-md'><a href='/MSUCertificateofCompletion.pdf' target='__blank'>View My Certificate</a></button>
                    </div>

                </div>

                <form onSubmit={handleSubmit} className='emailForm flex flex-col items-center lg:px-10 w-[65%] h-[65%] md:w-2/3 md:h-auto bg-[#eed29beb]'>
                    <article className='flex flex-col w-3/4 pt-5'>
                        <h2 className="text-3xl font-bold lg:text-3xl text-[#100607] w-3/4">Drop Me A Line</h2>
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
                        <button className='submit-btn bg-[#100607] w-32 lg:w-32' type='submit'>Submit</button>
                    </article>
                    {errorMessage && (
                        <article>
                            <p className="error-tex text-center text-xl lg:text-2xl mb-5">{errorMessage}</p>
                        </article>
                    )}
                </form>
            </article>
        </main>
    )
}

export default Contact