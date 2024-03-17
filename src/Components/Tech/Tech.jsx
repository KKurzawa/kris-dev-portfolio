import './Tech.jsx'
import { Tech } from '../../assets/data/Tech.jsx'
import './Tech.css';

const Techs = () => {
    return (
        <div id='Tech' className='bg-[#100607] pt-5 pb-5 '>
            {/* small */}
            <main className='md:hidden flex flex-col'>
                <h2 className='tech-header text-center text-3xl font-bold text-[#eed29b]'>Tech I Use</h2>
                <section className='flex flex-row justify-evenly flex-wrap py-2'>
                    {Tech.map((item) => item.id < 4 && (
                        <article key={item.id} className='text-center text-[#eed29b]'>
                            <a href={item.link} target='__blank'>
                                <i className='text-7xl'>{item.icon}</i>
                                <h3>{item.title}</h3>
                            </a>
                        </article>
                    ))}
                </section>
                <section className='flex flex-row justify-evenly flex-wrap py-2'>
                    {Tech.map((item) => item.id > 3 && item.id < 7 && (
                        <article key={item.id} className='text-center text-[#eed29b]'>
                            <a href={item.link} target='__blank'>
                                <i className='text-7xl'>{item.icon}</i>
                                <h3>{item.title}</h3>
                            </a>
                        </article>
                    ))}
                </section>
                <section className='flex flex-row justify-evenly flex-wrap py-2'>
                    {Tech.map((item) => item.id > 6 && item.id < 10 && (
                        <article key={item.id} className='text-center text-[#eed29b]'>
                            <a href={item.link} target='__blank'>
                                <i className='text-7xl'>{item.icon}</i>
                                <h3>{item.title}</h3>
                            </a>
                        </article>
                    ))}
                </section>
                <section className='flex flex-row justify-evenly flex-wrap py-2'>
                    {Tech.map((item) => item.id > 9 && (
                        <article key={item.id} className='text-center text-[#eed29b]'>
                            <a href={item.link} target='__blank'>
                                <i className='text-7xl'>{item.icon}</i>
                                <h3>{item.title}</h3>
                            </a>
                        </article>
                    ))}
                </section>

            </main>
            {/* md and lg */}
            <main className='hidden md:flex flex-col pb-10'>
                <h2 className='text-center text-3xl font-bold pb-3 text-[#eed29b]'>Tech I Use</h2>
                <section className='flex flex-row justify-evenly flex-wrap pb-16'>
                    {Tech.map((item) => item.id < 7 && (
                        <article key={item.id} className='tech-icons-title text-center text-[#eed29b]'>
                            <a href={item.link} target='__blank'>
                                <i className='text-7xl'>{item.icon}</i>
                                <h3>{item.title}</h3>
                            </a>
                        </article>
                    ))}
                </section>
                <section className='flex flex-row justify-evenly flex-wrap'>
                    {Tech.map((item) => item.id > 6 && (
                        <article key={item.id} className='tech-icons-title text-center text-[#eed29b]'>
                            <a href={item.link} target='__blank'>
                                <i className='text-7xl'>{item.icon}</i>
                                <h3>{item.title}</h3>
                            </a>
                        </article>
                    ))}
                </section>

            </main>
        </div>
    )
}

export default Techs