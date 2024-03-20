import './Navbar.css';
import { Navlinks } from '../../assets/data/NavLinks';

const Navbar = () => {

    return (
        <main id='navbar' className='bg-[#100607]'>
            <nav className='hidden h-32 md:flex'>
                <header className='flex flex-col justify-center w-1/3 pl-16 h-full'>
                    <h1 className='kurzawa text-[#980D1C] text-2xl md:text-6xl'>KURZAWA</h1>
                    <h2 className='text-[#eed29b] text-3xl'>DEVELOPMENT</h2>
                </header>
                <ol className='nav-link-container flex justify-evenly h-full items-end w-2/3'>
                    {Navlinks.map((item) => (
                        <li key={item.id} onClick='' className='nav-link text-[#eed29b] text-3xl mb-4'>
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