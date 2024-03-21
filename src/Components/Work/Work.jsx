import './Work.css';
import { FreeScreenshots, BootScreenshots } from '../../assets/data/Screenshots';
import { FaGithub } from "react-icons/fa";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Work = () => {
    return (
        <main className='work-main bg-[#100607] pt-5 md:pt-10 pb-10 border-t-[3px] md:border-t-0 border-t-[#eed29b89]'>
            <header id='Work' className='flex flex-col items-center'>
                <h1 className=' work-header text-3xl text-[#eed29b]'>Work</h1>
            </header>
            <div>
                {/* small */}
                <h2 className='md:hidden text-center text-2xl text-[#eed29b] pb-1'>Freelance Projects</h2>
                <main className='md:hidden flex flex-row justify-evenly text-sm md:text-[.6rem] pb-5 w-full'>
                    <article className='work-container text-center w-5/12 text-[#eed29b]'>
                        {FreeScreenshots.map((item, index) => index % 2 === 0 && (
                            <section key={item.id} className='w-full pb-2'>
                                <h2>{item.title}</h2>
                                <button onClick={() => setTimeout(() =>
                                    window.open(item.siteLink, '_blank')
                                    , 500)} ><LazyLoadImage src={item.image} alt='project image' className='work-pics-a my-1 w-44 work-pics' />
                                </button>
                                <button onClick={() => setTimeout(() =>
                                    window.open(item.gitLink, '_blank')
                                    , 500)} className='git-repos flex justify-center w-full'><i className='flex items-center'><FaGithub /><span>&nbsp;Repo</span></i>
                                </button>
                            </section>
                        ))}
                    </article>
                    <article className='work-container text-center w-5/12 text-[#eed29b]'>
                        {FreeScreenshots.map((item, index) => index % 2 !== 0 && (
                            <section key={item.id} className='w-full pb-2'>
                                <h2>{item.title}</h2>
                                <button onClick={() => setTimeout(() =>
                                    window.open(item.siteLink, '_blank')
                                    , 500)} ><LazyLoadImage src={item.image} alt='project image' className='work-pics-a my-1 w-44 work-pics' />
                                </button>
                                <button onClick={() => setTimeout(() =>
                                    window.open(item.gitLink, '_blank')
                                    , 500)} className='git-repos flex justify-center w-full'><i className='flex items-center'><FaGithub /><span>&nbsp;Repo</span></i>
                                </button>
                            </section>
                        ))}
                    </article>
                </main>
                <h2 className='md:hidden text-center text-2xl text-[#eed29b] pb-1'>Bootcamp Projects</h2>
                <main className='md:hidden flex flex-row justify-evenly text-sm md:text-[.6rem] w-full'>
                    <article className='work-container text-center text-[#eed29b] w-5/12'>
                        {BootScreenshots.map((item, index) => index % 2 === 0 && (
                            <section key={item.id} className='w-full pb-2'>
                                <h2>{item.title}</h2>
                                <button onClick={() => setTimeout(() =>
                                    window.open(item.siteLink, '_blank')
                                    , 500)} ><LazyLoadImage src={item.image} alt='project image' className='work-pics-a my-1 w-44 work-pics' />
                                </button>
                                <button onClick={() => setTimeout(() =>
                                    window.open(item.gitLink, '_blank')
                                    , 500)} className='git-repos flex justify-center w-full'><i className='flex items-center'><FaGithub /><span>&nbsp;Repo</span></i>
                                </button>
                            </section>
                        ))}
                    </article>
                    <article className='work-container text-center text-[#eed29b] w-5/12'>
                        {BootScreenshots.map((item, index) => index % 2 !== 0 && (
                            <section key={item.id} className='pb-2 w-full'>
                                <h2>{item.title}</h2>
                                <button onClick={() => setTimeout(() =>
                                    window.open(item.siteLink, '_blank')
                                    , 500)} ><LazyLoadImage src={item.image} alt='project image' className='work-pics-a my-1 w-44 work-pics' />
                                </button>
                                <button onClick={() => setTimeout(() =>
                                    window.open(item.gitLink, '_blank')
                                    , 500)} className='git-repos flex justify-center w-full'><i className='flex items-center'><FaGithub /><span>&nbsp;Repo</span></i>
                                </button>
                            </section>
                        ))}
                    </article>
                </main>
            </div>
            {/* medium and large */}
            <h2 className='hidden md:block text-center text-2xl pb-3 text-[#eed29b]'>Freelance Projects</h2>

            <main className='hidden md:flex text-md justify-evenly pb-5'>
                {FreeScreenshots.map((item) => (
                    <article key={item.id} className='work-container flex flex-col justify-center items-center text-[#eed29b]'>
                        <h2>{item.title}</h2>
                        <button onClick={() => setTimeout(() =>
                            window.open(item.siteLink, '_blank')
                            , 500)} ><LazyLoadImage src={item.image} alt='project image' className='work-pics-a my-1 md:w-44 lg:w-56 work-pics' />
                        </button>
                        <button onClick={() => setTimeout(() =>
                            window.open(item.gitLink, '_blank')
                            , 500)} className='git-repos'><i className='flex items-center'><FaGithub /><span>&nbsp;Repo</span></i>
                        </button>
                    </article>
                ))}
            </main>
            <h2 className='hidden md:block text-center text-2xl pb-3 text-[#eed29b]'>Bootcamp Projects</h2>
            <main className='hidden md:flex text-md justify-evenly'>
                {BootScreenshots.map((item) => (
                    <article key={item.id} className='work-container flex flex-col justify-center items-center text-[#eed29b]'>
                        <button onClick={() => setTimeout(() =>
                            window.open(item.siteLink, '_blank')
                            , 500)} ><LazyLoadImage src={item.image} alt='project image' className='work-pics-a my-1 md:w-44 lg:w-56 work-pics' />
                        </button>
                        <button onClick={() => setTimeout(() =>
                            window.open(item.gitLink, '_blank')
                            , 500)} className='git-repos'><i className='flex items-center'><FaGithub /><span>&nbsp;Repo</span></i>
                        </button>
                    </article>
                ))}
            </main>
        </main>

    )
}

export default Work