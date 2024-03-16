import './Navbar.css';
import { Navlinks } from '../../assets/data/NavLinks';

const Navbar = () => {
    return (
        <main id='navbar' className='bg-[#100607]'>
            <nav className='h-10'>
                <ol className='flex justify-evenly w-full h-full items-end'>
                    {Navlinks.map((item) => (
                        <li key={item.id} className='text-[whitesmoke] '>
                            <a href={item.link} className=''>
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