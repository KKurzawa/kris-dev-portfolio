import './Navbar.css';
import { Navlinks } from '../../assets/data/NavLinks';

const Navbar = () => {
    return (
        <main id='navbar' className='bg-[#100607]'>
            <nav className='h-32 flex'>
                <header className='flex flex-col justify-center w-1/3 pl-16'>
                    <h1 className='text-[#980D1C] text-6xl'>KURZAWA</h1>
                    <h2 className='text-[#eed29b] text-3xl'>DEVELOPMENT</h2>
                </header>

                <ol className='flex justify-evenly h-full items-end w-2/3'>
                    {Navlinks.map((item) => (
                        <li key={item.id} className='text-[#eed29b] text-3xl pb-4'>
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