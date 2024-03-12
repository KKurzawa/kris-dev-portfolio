import './Home.css';
import Work from '../../Components/Work/Work';
import Skills from '../../Components/Skills/Skills';
import Resume from '../../Components/Resume/Resume';
import Contact from '../../Components/Contact/Contact';
import About from '../../Components/About/About';

const Home = () => {
    return (
        <main className='main-container'>
            <article className='about-container'>
                <About />
            </article>
            <article className='work-container'>
                <Work />
            </article>
            <article className='skills-container'>
                <Skills />
            </article>
            <article className='contact-container'>
                <Contact />
            </article>
            <article className='resume-container'>
                <Resume />
            </article>
        </main >
    )
}

export default Home