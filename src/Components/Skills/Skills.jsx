import './Skills.jsx'
import { Tech } from '../../assets/data/Tech.jsx'

const Skills = () => {
    return (
        <>
            {/* small */}
            <main id="Skills" className='md:hidden flex flex-col'>
                <h2 className='text-center'>Tech I Use</h2>
                <section className='flex flex-row justify-evenly flex-wrap'>
                    {Tech.map((item) => item.id < 4 && (
                        <article key={item.id} className='text-center'>
                            <a href={item.link} target='__blank'>
                                <i className='text-7xl'>{item.icon}</i>
                                <h3>{item.title}</h3>
                            </a>
                        </article>
                    ))}
                </section>
                <section className='flex flex-row justify-evenly flex-wrap'>
                    {Tech.map((item) => item.id > 3 && item.id < 7 && (
                        <article key={item.id} className='text-center'>
                            <a href={item.link} target='__blank'>
                                <i className='text-7xl'>{item.icon}</i>
                                <h3>{item.title}</h3>
                            </a>
                        </article>
                    ))}
                </section>
                <section className='flex flex-row justify-evenly flex-wrap'>
                    {Tech.map((item) => item.id > 6 && item.id < 10 && (
                        <article key={item.id} className='text-center'>
                            <a href={item.link} target='__blank'>
                                <i className='text-7xl'>{item.icon}</i>
                                <h3>{item.title}</h3>
                            </a>
                        </article>
                    ))}
                </section>
                <section className='flex flex-row justify-evenly flex-wrap'>
                    {Tech.map((item) => item.id > 9 && (
                        <article key={item.id} className='text-center'>
                            <a href={item.link} target='__blank'>
                                <i className='text-7xl'>{item.icon}</i>
                                <h3>{item.title}</h3>
                            </a>
                        </article>
                    ))}
                </section>

            </main>
            {/* md and lg */}
            <main id="Skills" className='hidden md:flex flex-col'>
                <h2 className='text-center'>Tech I Use</h2>
                <section className='flex flex-row justify-evenly flex-wrap'>
                    {Tech.map((item) => item.id < 7 && (
                        <article key={item.id} className='text-center'>
                            <a href={item.link} target='__blank'>
                                <i className='text-7xl'>{item.icon}</i>
                                <h3>{item.title}</h3>
                            </a>
                        </article>
                    ))}
                </section>
                <section className='flex flex-row justify-evenly flex-wrap'>
                    {Tech.map((item) => item.id > 6 && (
                        <article key={item.id} className='text-center'>
                            <a href={item.link} target='__blank'>
                                <i className='text-7xl'>{item.icon}</i>
                                <h3>{item.title}</h3>
                            </a>
                        </article>
                    ))}
                </section>

            </main>
        </>
    )
}

export default Skills