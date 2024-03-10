import './Navbar.css';
import { Navlinks } from '../../assets/data/NavLinks';

const Navbar = () => {
    return (
        <main>
            <nav>
                <ol className='flex justify-evenly'>
                    {Navlinks.map((item) => (
                        <li key={item.id}>
                            <a href={item.link}>
                                {item.title}
                            </a>
                        </li>
                    ))}
                </ol>
            </nav>
        </main>

    )
}

export default Navbar