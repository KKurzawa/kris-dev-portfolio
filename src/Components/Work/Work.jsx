import './Work.css';
import { FreeScreenshots } from '../../assets/data/Screenshots';
import { FaGithub } from "react-icons/fa";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Work = () => {
    return (
        <main className='work-main pt-5 md:pt-5 pb-10 border-t-[3px] md:border-t-0'>
            <header id='Work' className='flex flex-col items-center'>
                <h1 className='work-header text-3xl'>Work</h1>
            </header>
            {/* small */}
            <section className='flex flex-col items-center gap-3 mt-3'>
                {FreeScreenshots.map((item) => (
                    <article key={item.id} className='flex md:hidden flex-col items-center gap-1'>
                        <h2>{item.title}</h2>
                        <button onClick={(() => setTimeout(() => {
                            window.open(item.siteLink, '__blank')
                        }, 500))} className='w-[85%]'><LazyLoadImage src={item.image} alt='project image' className='work-pics' /></button>
                        <button onClick={(() => setTimeout(() => {
                            window.open(item.gitLink, '__blank')
                        }, 500))} className='git-repos flex justify-center w-full'><i className='flex items-center'><FaGithub /><span>&nbsp;Repo</span></i></button>
                    </article>
                ))}
            </section>
            {/* <section>
                <h2 className='projects-header md:hidden text-center text-2xl pb-1'>Freelance Projects</h2>
                <main className='md:hidden flex-row justify-evenly w-full pb-5 text-sm md:text-[.6rem]'>
                    <article className='work-container text-center w-5/12'>
                        {FreeScreenshots.map((item, index) => index % 2 === 0 && (
                            <section key={item.id} className='w-full pb-2'>
                                <h2>{item.title}</h2>
                                <button onClick={() => setTimeout(() =>
                                    window.open(item.siteLink, '_blank')
                                    , 500)} ><LazyLoadImage src={item.image} alt='project image' className='work-pics w-44 my-1' />
                                </button>
                                <button onClick={() => setTimeout(() =>
                                    window.open(item.gitLink, '_blank')
                                    , 500)} className='git-repos flex justify-center w-full'><i className='flex items-center'><FaGithub /><span>&nbsp;Repo</span></i>
                                </button>
                            </section>
                        ))}
                    </article>
                    <article className='work-container text-center w-5/12'>
                        {FreeScreenshots.map((item, index) => index % 2 !== 0 && (
                            <section key={item.id} className='w-full pb-2'>
                                <h2>{item.title}</h2>
                                <button onClick={() => setTimeout(() =>
                                    window.open(item.siteLink, '_blank')
                                    , 500)} ><LazyLoadImage src={item.image} alt='project image' className='work-pics w-44 my-1' />
                                </button>
                                <button onClick={() => setTimeout(() =>
                                    window.open(item.gitLink, '_blank')
                                    , 500)} className='git-repos flex justify-center w-full'><i className='flex items-center'><FaGithub /><span>&nbsp;Repo</span></i>
                                </button>
                            </section>
                        ))}
                    </article>
                </main>
                <h2 className='projects-header md:hidden text-center pb-1 text-2xl'>Bootcamp Projects</h2>
                <main className='md:hidden flex flex-row justify-evenly w-full text-sm md:text-[.6rem]'>
                    <article className='work-container text-center w-5/12'>
                        {BootScreenshots.map((item, index) => index % 2 === 0 && (
                            <section key={item.id} className='w-full pb-2'>
                                <h2>{item.title}</h2>
                                <button onClick={() => setTimeout(() =>
                                    window.open(item.siteLink, '_blank')
                                    , 500)} ><LazyLoadImage src={item.image} alt='project image' className='work-pics my-1 w-44' />
                                </button>
                                <button onClick={() => setTimeout(() =>
                                    window.open(item.gitLink, '_blank')
                                    , 500)} className='git-repos flex justify-center w-full'><i className='flex items-center'><FaGithub /><span>&nbsp;Repo</span></i>
                                </button>
                            </section>
                        ))}
                    </article>
                    <article className='work-container text-center w-5/12'>
                        {BootScreenshots.map((item, index) => index % 2 !== 0 && (
                            <section key={item.id} className='w-full pb-2'>
                                <h2>{item.title}</h2>
                                <button onClick={() => setTimeout(() =>
                                    window.open(item.siteLink, '_blank')
                                    , 500)} ><LazyLoadImage src={item.image} alt='project image' className='work-pics w-44 my-1' />
                                </button>
                                <button onClick={() => setTimeout(() =>
                                    window.open(item.gitLink, '_blank')
                                    , 500)} className='git-repos flex justify-center w-full'><i className='flex items-center'><FaGithub /><span>&nbsp;Repo</span></i>
                                </button>
                            </section>
                        ))}
                    </article>
                </main>
            </section> */}
            {/* medium and large */}
            <article className='flex justify-evenly mb-10'>
                {FreeScreenshots.map((item, index) => index < 3 && (
                    <section key={item.id} className='flex flex-col items-center w-[25%] gap-2'>
                        <h2>{item.title}</h2>
                        <button onClick={() => setTimeout(() => {
                            window.open(item.siteLink, '__blank')
                        }, 500)} className=''>
                            <LazyLoadImage src={item.image} alt='project image' className='work-pics' />
                        </button>
                        <button onClick={() => setTimeout(() =>
                            window.open(item.gitLink, '_blank')
                            , 500)} className='git-repos'><i className='flex items-center'><FaGithub /><span>&nbsp;Repo</span></i>
                        </button>
                    </section>
                ))}

            </article>
            <article className='flex justify-evenly'>
                {FreeScreenshots.map((item, index) => index > 2 && (
                    <section key={item.id} className='flex flex-col items-center w-[25%] gap-2'>
                        <h2>{item.title}</h2>
                        <button onClick={() => setTimeout(() => {
                            window.open(item.siteLink, '__blank')
                        }, 500)}>
                            <LazyLoadImage src={item.image} alt='project image' className='work-pics' />
                        </button>
                        <button onClick={() => setTimeout(() =>
                            window.open(item.gitLink, '_blank')
                            , 500)} className='git-repos'><i className='flex items-center'><FaGithub /><span>&nbsp;Repo</span></i>
                        </button>
                    </section>
                ))}
            </article>
            {/* <h2 className='projects-header hidden md:block text-center pb-3 text-2xl'>Freelance Projects</h2>
            <main className='hidden md:flex justify-evenly pb-5 text-md lg:text-xl'>
                {FreeScreenshots.map((item) => (
                    <article key={item.id} className='work-container flex flex-col justify-center items-center'>
                        <h2>{item.title}</h2>
                        <button onClick={() => setTimeout(() =>
                            window.open(item.siteLink, '_blank')
                            , 500)} ><LazyLoadImage src={item.image} alt='project image' className='work-pics md:w-44 lg:w-56 my-1' />
                        </button>
                        <button onClick={() => setTimeout(() =>
                            window.open(item.gitLink, '_blank')
                            , 500)} className='git-repos'><i className='flex items-center'><FaGithub /><span>&nbsp;Repo</span></i>
                        </button>
                    </article>
                ))}
            </main>
            <h2 className='projects-header hidden md:block text-center pb-3 text-2xl'>Bootcamp Projects</h2>
            <main className='hidden md:flex justify-evenly text-md lg:text-xl'>
                {BootScreenshots.map((item) => (
                    <article key={item.id} className='work-container flex flex-col justify-center items-center'>
                        <h2>{item.title}</h2>
                        <button onClick={() => setTimeout(() =>
                            window.open(item.siteLink, '_blank')
                            , 500)} ><LazyLoadImage src={item.image} alt='project image' className='work-pics md:w-44 lg:w-56 my-1' />
                        </button>
                        <button onClick={() => setTimeout(() =>
                            window.open(item.gitLink, '_blank')
                            , 500)} className='git-repos'><i className='flex items-center'><FaGithub /><span>&nbsp;Repo</span></i>
                        </button>
                    </article>
                ))}
            </main> */}
        </main>

    )
}

export default Work