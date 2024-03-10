import './About.css';
import { Navlinks } from '../../assets/data/NavLinks';
import Work from '../../Components/Work/Work';
import Skills from '../../Components/Skills/Skills';
import Resume from '../../Components/Resume/Resume';
import Contact from '../../Components/Contact/Contact';

const About = () => {
    return (
        <main className=''>
            <article id={Navlinks[0].title} className='about-container'>
                <h2 className='mt-48'>{Navlinks[0].title}</h2>
            </article>
            <article className='skills-container'>
                <Skills />
            </article>
            <article className='work-container'>
                <Work />
            </article>
            <article className='resume-container'>
                <Resume />
            </article>
            <article className='contact-container'>
                <Contact />
            </article>
        </main>
    )
}

export default About