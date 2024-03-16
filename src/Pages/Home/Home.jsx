import './Home.css';
import Work from '../../Components/Work/Work';
// import Resume from '../../Components/Resume/Resume';
import Contact from '../../Components/Contact/Contact';
import About from '../../Components/About/About';
import Techs from '../../Components/Tech/Tech';

const Home = () => {
    return (
        <main className='main-container'>
            <article className='about-container'>
                <About />
            </article>
            <article className='work-container'>
                <Work />
            </article>
            <article className='tech-container'>
                <Techs />
            </article>
            {/* <article className='resume-container'>
                <Resume />
            </article> */}
            <article className='contact-container'>
                <Contact />
            </article>
        </main >
    )
}

export default Home