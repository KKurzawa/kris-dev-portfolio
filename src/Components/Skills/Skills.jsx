import './Skills.jsx'
import { Tech } from '../../assets/data/Tech.jsx'

const Skills = () => {
    return (
        <main id="Skills" className='flex flex-col'>
            <h2 className='text-center'>Tech I Use</h2>
            <section className='flex flex-row justify-evenly flex-wrap'>
                {Tech.map((item) => (
                    <article key={item.id} className='text-center'>
                        <a href={item.link} target='__blank'>
                            <i className='text-7xl'>{item.icon}</i>
                            <h3>{item.title}</h3>
                        </a>
                    </article>
                ))}
            </section>

        </main>
    )
}

export default Skills