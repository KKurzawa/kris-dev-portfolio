import './Work.css';
import { FreeScreenshots, BootScreenshots } from '../../assets/data/Screenshots';
import { FaGithub } from "react-icons/fa";

const Work = () => {
    return (
        <>
            <header id='Work' className='flex flex-col items-center'>
                <h1>Work</h1>
            </header>
            <div>
                {/* small and medium */}
                <h2 className='lg:hidden text-center'>Freelance Projects</h2>
                <main className='lg:hidden flex flex-row justify-evenly text-[.6rem]'>
                    <article className='work-container text-center'>
                        {FreeScreenshots.map((item, index) => index % 2 === 0 && (
                            <section key={item.id}>
                                <h2>{item.title}</h2>
                                <a href={item.siteLink} target='__blank' className=''>
                                    <img src={item.image} alt={item.title} className='w-44' />
                                </a>
                                <section className=''>
                                    <a href={item.gitLink} target='__blank'>
                                        <i className='flex items-center justify-center'><FaGithub /><h3 className='normal'>&nbsp; Repository</h3></i>
                                    </a>
                                </section>
                            </section>
                        ))}
                    </article>
                    <article className='work-container text-center'>
                        {FreeScreenshots.map((item, index) => index % 2 !== 0 && (
                            <section key={item.id}>
                                <h2>{item.title}</h2>
                                <a href={item.siteLink} target='__blank' className=''>
                                    <img src={item.image} alt={item.title} className='w-44' />
                                </a>
                                <section className=''>
                                    <a href={item.gitLink} target='__blank'>
                                        <i className='flex items-center justify-center'><FaGithub /><h3 className='normal'>&nbsp; Repository</h3></i>
                                    </a>
                                </section>
                            </section>
                        ))}
                    </article>
                </main>
                <h2 className='lg:hidden text-center'>Bootcamp Projects</h2>
                <main className='lg:hidden flex flex-row justify-evenly text-[.6rem]'>
                    <article className='work-container text-center'>
                        {BootScreenshots.map((item, index) => index % 2 === 0 && (
                            <section key={item.id}>
                                <h2>{item.title}</h2>
                                <a href={item.siteLink} target='__blank' className=''>
                                    <img src={item.image} alt={item.title} className='w-44' />
                                </a>
                                <section className=''>
                                    <a href={item.gitLink} target='__blank'>
                                        <i className='flex items-center justify-center'><FaGithub /><h3 className='normal'>&nbsp; Repository</h3></i>
                                    </a>
                                </section>
                            </section>
                        ))}
                    </article>
                    <article className='work-container text-center'>
                        {BootScreenshots.map((item, index) => index % 2 !== 0 && (
                            <section key={item.id}>
                                <h2>{item.title}</h2>
                                <a href={item.siteLink} target='__blank' className=''>
                                    <img src={item.image} alt={item.title} className='w-44' />
                                </a>
                                <section className=''>
                                    <a href={item.gitLink} target='__blank'>
                                        <i className='flex items-center justify-center'><FaGithub /><h3 className='normal'>&nbsp; Repository</h3></i>
                                    </a>
                                </section>
                            </section>
                        ))}
                    </article>
                </main>
            </div>



            {/* large */}
            <h2 className='hidden lg:block text-center'>Freelance Projects</h2>
            <main className='hidden lg:flex text-sm justify-evenly'>
                {FreeScreenshots.map((item) => (
                    <article key={item.id} className='work-container flex flex-col justify-center items-center'>
                        <h2>{item.title}</h2>
                        <a href={item.siteLink} target='__blank' className=''>
                            <img src={item.image} alt={item.title} className='w-64' />
                        </a>
                        <section className=''>
                            <a href={item.gitLink} target='__blank'>
                                <i className='flex items-center'><FaGithub /><h3 className='normal'>&nbsp; Repository</h3></i>
                            </a>
                        </section>
                    </article>
                ))}
            </main>
            <h2 className='hidden lg:block text-center'>Bootcamp Projects</h2>
            <main className='hidden lg:flex text-sm justify-evenly'>
                {BootScreenshots.map((item) => (
                    <article key={item.id} className='work-container flex flex-col justify-center items-center'>
                        <h2>{item.title}</h2>
                        <a href={item.siteLink} target='__blank' className=''>
                            <img src={item.image} alt={item.title} className='w-64' />
                        </a>
                        <section className=''>
                            <a href={item.gitLink} target='__blank'>
                                <i className='flex items-center'><FaGithub /><h3 className='normal'>&nbsp; Repository</h3></i>
                            </a>
                        </section>
                    </article>
                ))}
            </main>
        </>

    )
}

export default Work