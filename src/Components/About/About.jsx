import './About.css'

const About = () => {
    return (
        <main className='flex justify-evenly w-full h-auto'>
            <header className='flex-col w-1/2 m-16'>
                <h2 className='text-3xl text-start'>Hello! My name is</h2>
                <h1 className='text-7xl text-start'>Kris Kurzawa.</h1>
                <h2 className='text-5xl text-start'>I develop and design things for the web.</h2>
            </header>
            <p className="w-1/2 m-16 justify-center text-justify">Thank you for visiting my site!  Residing in Detroit Michigan I am a full-stack web developer/designer with a passion growing everyday for making web ideas a reality.  While Javascript and the MERN stack are my go to, I have an extra special place in my heart for CSS.  I am equally passionate about music which has led to being a lifelong self employed musician/composer/music educator.  Currently I am part-time employed at Detroit's Wayne State University as adjunct faculty in their Jazz Studies program.  I am currently seeking freelance/part-time/full-time web development projects to bring to life.  Please feel free to hit me up... I'm always open.  Cheers!</p>
        </main>
    )
}

export default About