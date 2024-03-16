import './About.css'

const About = () => {
    return (
        <main className='flex flex-col md:flex-row items-center md:justify-evenly w-full h-fit md:h-[30rem] '>
            <header className='bg-[#980D1C] text-[whitesmoke] flex flex-col w-full md:w-1/3 p-8 md:p-16 h-fit md:h-full justify-center'>
                <h2 className='text-2xl py-1 text-start'>Hello! My name is</h2>
                <h1 className='text-7xl py-1 text-start'>Kris Kurzawa.</h1>
                <h2 className='text-4xl py-1 text-start'>I develop and design things for the web.</h2>
            </header>
            <p className="w-full md:w-2/3 h-fit md:h-full p-8 lg:p-16 flex justify-center items-center text-xl md:text-xl text-justify bg-[#eed29bb1]">Thank you for visiting my site!  Residing in Detroit Michigan I am a full-stack web developer/designer with a passion growing everyday for making web ideas a reality.  While Javascript and the MERN stack are my go to, I have an extra special place in my heart for CSS.  I am equally passionate about music which has led to being a lifelong self employed musician/composer/music educator.  Currently I am part-time employed at Detroit's Wayne State University as adjunct faculty in their Jazz Studies program.  I am currently seeking freelance/part-time/full-time web development projects to bring to life.  Please feel free to hit me up... I'm always open.  Cheers!</p>
        </main>
    )
}

export default About