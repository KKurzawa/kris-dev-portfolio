import './About.css'

const About = () => {
    return (
        <main className='flex flex-col md:flex-row items-center md:justify-evenly w-full h-fit md:h-[30rem] border-t-[1px] md:border-t-0 border-[#eed29ba8]'>
            <header className='welcome-message md:border-r-[3px] md:border-[#eed29be6]  bg-[#980D1C] flex flex-col w-full md:w-1/3 px-8 py-4 lg:px-16 md:py-16 h-fit md:h-full justify-center'>
                <h2 className='hello text-xl md:text-2xl md:py-1 text-start'>Hello! <span className='my'>My </span><span className='name'>name </span><span className='is'>is</span></h2>
                <h1 className='kris-text text-5xl lg:text-6xl py-1 text-start'>Kris <span className='kurzawa-text'>Kurzawa.</span></h1>
                <h2 className='description text-3xl md:text-4xl py-1 text-start'>I develop and design things for the web.</h2>
            </header>
            <article className="about md:border-l-[4px] md:border-l-[#980D1C] border-b-[3px] md:border-b-0 border-b-[#980d1bc2] border-t-[2px] md:border-t-0 border-t-[#841f29] w-full md:w-2/3 h-fit md:h-full p-8 lg:p-16 flex justify-center items-center text-md md:text-xl bg-[#eed29beb]">
                <p className='about-text'>Thank you for visiting my site!  Residing in Detroit Michigan I am a full-stack web developer/designer with a passion growing every day for making web ideas a reality.  While Javascript and the MERN stack are my go-to, I have an extra special place in my heart for CSS.  I am equally passionate about music which has led to my being a lifelong self-employed musician, composer, and music educator.  Currently, I am part-time employed at Detroit's Wayne State University as adjunct faculty in their Jazz Studies program.  I am currently seeking freelance/part-time/full-time web development projects to bring to life.  Please feel free to hit me up... I'm always open.  Cheers!</p>
            </article>
        </main>
    )
}

export default About