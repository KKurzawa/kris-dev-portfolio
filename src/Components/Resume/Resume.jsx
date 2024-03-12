import './Resume.css'

const Resume = () => {
    return (
        <main id='Resume' className='flex flex-col items-center'>
            <article className='flex-row justify-evenly'>
                <button className='res-btn mr-20'><a href='/KrisKurzawaResume.pdf' target='__blank'>View My Resume</a></button>
                <button className='res-btn ml-20'><a href='/KrisKurzawaResume.pdf' target='__blank'>View My Certificate</a></button>
            </article>
            <h2 className='topLink'><a href='#navbar'>to the top</a></h2>
        </main>
    )
}

export default Resume