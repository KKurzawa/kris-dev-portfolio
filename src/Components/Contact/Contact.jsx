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
        <main id='Contact' className='flex flex-col items-center border-b-[3px] md:border-b-0 border-b-[#841f29] border-t-[1px] md:border-t-0 border-t-[#eed29ba8]'>
            <article className='pic-form-container flex flex-col lg:items-none lg:flex lg:flex-row lg:justify-evenly h-fit md:h-[28rem]'>
                <div className='pic-container md:border-r-[3px] md:border-[#eed29be6] bg-[#980D1C] w-full h-full md:w-1/3 md:h-[100%] flex flex-col justify-center items-center'>
                    <LazyLoadImage src={KrisKurzawaPic} className='kris w-10/12 h-auto mt-6 md:mt-0' />
                    <div className='flex justify-evenly p-2 w-full text-[#eed29b]'>
                        <button className='res-btn text-md'><a href='/KrisKurzawaResume.pdf' target='__blank'>View My Resume</a></button>
                        <button className='res-btn text-md'><a href='/MSUCertificateofCompletion.pdf' target='__blank'>View My Certificate</a></button>
                    </div>

                </div>

                <form onSubmit={handleSubmit} className='emailForm border-t-[2px] md:border-t-0 border-t-[#841f29] md:border-l-[4px] md:border-[#980D1C] flex flex-col items-center lg:px-10 w-full h-fit md:w-2/3 md:h-auto bg-[#eed29beb]'>
                    <article className='flex flex-col w-4/5 md:w-3/4 pt-5'>
                        <h2 className="text-3xl font-bold lg:text-3xl text-[#100607] w-3/4 pb-1">Drop Me A Line</h2>
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
                        <button className='submit-btn bg-[#100607] w-32 mb-5 md:mb-0 md:w-32' type='submit'>Submit</button>
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