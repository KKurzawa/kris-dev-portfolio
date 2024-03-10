import './About.css';
import { Navlinks } from '../../assets/data/NavLinks';
import Work from '../../Components/Screenshots/Work';

const About = () => {
    return (
        <main className=''>
            <article id={Navlinks[0].title} className='about-container'>
                <h2 className='mt-48'>{Navlinks[0].title}</h2>
            </article>
            <article id={Navlinks[1].title} className='skills-container'>
                <h2 className='mt-48'>{Navlinks[1].title}</h2>
            </article>
            <article className='work-container'>
                <Work />
            </article>
            <article className='resume-container'>
                <h2 id={Navlinks[3].title} className='mt-48'>{Navlinks[3].title}</h2>
            </article>
            <article className='contact-container'>
                <h2 id={Navlinks[4].title} className='mt-48'>{Navlinks[4].title}</h2>
            </article>
        </main>
    )
}

export default About