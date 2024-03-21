import './Footer.css';
import { icons } from '../../assets/data/SMIcons';

const Footer = () => {
    const today = new Date();
    return (
        <footer className='footer flex flex-col items-center bg-[#100607] text-[#eed29b] border-t-[1px] md:border-t-0 border-t-[#eed29ba8]'>
            <article className='flex'>
                {icons.map((item) => (
                    <i key={item.id} className='social-icons text-xl p-3 md:p-5 lg:text-5xl lg:p-7'><button onClick={() => setTimeout(() =>
                        window.open(item.link, '_blank')
                        , 500)} >
                        {item.symbol}
                    </button></i>
                ))}
            </article>
            <article className='flex flex-col items-center text-sm md:text-md'>
                <h2 className='top-link md:hidden mb-1 md:mb-3'><a href='#navbar-mobile'>To The Top</a></h2>
                <h2 className='top-link hidden md:block mb-1 md:mb-3'><a href='#navbar'>To The Top</a></h2>
                <h2 className='mailto-link mb-1 md:mb-3'> <button onClick={() => setTimeout(() =>
                    window.open('mailto:kurzawa1@yahoo.com')
                    , 500)} >Email Me</button></h2>
                <h2 className='phone-link mb-1 md:mb-3'><button onClick={() => setTimeout(() =>
                    window.open('tel:2485682806')
                    , 500)} >Call Me</button></h2>
                <p className='mb-1 md:mb-3'>Copyright &copy; {today.getFullYear()} Kriskurzawadev - All Rights Reserved</p>
                <h2 className='webdev-link mb-4 md:mb-8'>Site Designed and Built by Kris Kurzawa</h2>
            </article>

        </footer>
    )
}

export default Footer