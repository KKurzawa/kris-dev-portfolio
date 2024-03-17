import './Work.css';
import { FreeScreenshots, BootScreenshots } from '../../assets/data/Screenshots';
import { FaGithub } from "react-icons/fa";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Work = () => {
    return (
        <main className='work-main bg-[#100607] pt-5 md:pt-10 pb-10 border-t-[3px] md:border-t-0 border-t-[#eed29b89]'>
            <header id='Work' className='flex flex-col items-center'>
                <h1 className='text-3xl font-bold text-[#eed29b]'>Work</h1>
            </header>
            <div>
                {/* small and medium */}
                <h2 className='lg:hidden text-center text-2xl text-[#eed29b] pb-1'>Freelance Projects</h2>
                <main className='lg:hidden flex flex-row justify-evenly text-sm md:text-[.6rem] pb-5'>
                    <article className='work-container text-center text-[#eed29b]'>
                        {FreeScreenshots.map((item, index) => index % 2 === 0 && (
                            <section key={item.id} className='pb-2'>
                                <h2>{item.title}</h2>
                                <a href={item.siteLink} target='__blank' className=''>
                                    <LazyLoadImage src={item.image} alt={item.title} className='work-pics w-44' />
                                </a>
                                <section className=''>
                                    <a href={item.gitLink} target='__blank'>
                                        <i className='flex items-center justify-center'><FaGithub /><h3 className='normal'>&nbsp; Repository</h3></i>
                                    </a>
                                </section>
                            </section>
                        ))}
                    </article>
                    <article className='work-container text-center text-[#eed29b]'>
                        {FreeScreenshots.map((item, index) => index % 2 !== 0 && (
                            <section key={item.id} className='pb-2'>
                                <h2>{item.title}</h2>
                                <a href={item.siteLink} target='__blank' className=''>
                                    <LazyLoadImage src={item.image} alt={item.title} className='w-44 work-pics' />
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
                <h2 className='lg:hidden text-center text-2xl text-[#eed29b] pb-1'>Bootcamp Projects</h2>
                <main className='lg:hidden flex flex-row justify-evenly text-sm md:text-[.6rem]'>
                    <article className='work-container text-center text-[#eed29b]'>
                        {BootScreenshots.map((item, index) => index % 2 === 0 && (
                            <section key={item.id} className='pb-2'>
                                <h2>{item.title}</h2>
                                <a href={item.siteLink} target='__blank' className=''>
                                    <LazyLoadImage src={item.image} alt={item.title} className='w-44 work-pics' />
                                </a>
                                <section className=''>
                                    <a href={item.gitLink} target='__blank' >
                                        <i className='flex items-center justify-center'><FaGithub /><h3 className='normal'>&nbsp; Repository</h3></i>
                                    </a>
                                </section>
                            </section>
                        ))}
                    </article>
                    <article className='work-container text-center text-[#eed29b]'>
                        {BootScreenshots.map((item, index) => index % 2 !== 0 && (
                            <section key={item.id} className='pb-2'>
                                <h2>{item.title}</h2>
                                <a href={item.siteLink} target='__blank' className=''>
                                    <LazyLoadImage src={item.image} alt={item.title} className='w-44 work-pics' />
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
            <h2 className='hidden lg:block text-center text-2xl pb-3 text-[#eed29b]'>Freelance Projects</h2>
            <main className='hidden lg:flex text-md justify-evenly pb-5'>
                {FreeScreenshots.map((item) => (
                    <article key={item.id} className='work-container flex flex-col justify-center items-center text-[#eed29b]'>
                        <h2>{item.title}</h2>
                        <a href={item.siteLink} target='__blank' className='work-pics-a my-1'>
                            <LazyLoadImage src={item.image} alt={item.title} className='w-64 work-pics' />
                        </a>
                        <section className=''>
                            <a href={item.gitLink} target='__blank' className='git-repos'>
                                <i className='flex items-center'><FaGithub /><h3 className='normal'>&nbsp; Repository</h3></i>
                            </a>
                        </section>
                    </article>
                ))}
            </main>
            <h2 className='hidden lg:block text-center text-2xl pb-3 text-[#eed29b]'>Bootcamp Projects</h2>
            <main className='hidden lg:flex text-md justify-evenly'>
                {BootScreenshots.map((item) => (
                    <article key={item.id} className='work-container flex flex-col justify-center items-center text-[#eed29b]'>
                        <h2>{item.title}</h2>
                        <a href={item.siteLink} target='__blank' className='work-pics-a my-1'>
                            <LazyLoadImage src={item.image} alt={item.title} className='w-64 work-pics' />
                        </a>
                        <section className=''>
                            <a href={item.gitLink} target='__blank' className='git-repos'>
                                <i className='flex items-center'><FaGithub /><h3 className='normal'>&nbsp; Repository</h3></i>
                            </a>
                        </section>
                    </article>
                ))}
            </main>
        </main>

    )
}

export default Work