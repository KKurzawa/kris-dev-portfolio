import './Footer.css';
import { icons } from '../../assets/data/SMIcons';

const Footer = () => {
    const today = new Date();
    return (
        <footer className='footer flex flex-col items-center bg-[#100607] text-[#eed29b]'>
            <article className='flex'>
                {icons.map((item) => (
                    <i key={item.id} className='social-icons text-xl p-3 lg:text-5xl lg:p-7'><a href={item.link} target='__blank'>{item.symbol}</a></i>
                ))}
            </article>
            <article className='flex flex-col items-center text-sm md:text-md'>
                <h2 className='top-link mb-1 md:mb-3'><a href='#navbar'>To The Top</a></h2>
                <h2 className='mailto-link mb-1 md:mb-3'> <a href='mailto:kurzawa1@yahoo.com'>Email Me</a></h2>
                <h2 className='phone-link mb-1 md:mb-3'><a href='tel:2485682806'>Call Me</a></h2>
                <p className='mb-1 md:mb-3'>Copyright &copy; {today.getFullYear()} Kriskurzawadev - All Rights Reserved</p>
                <button onClick={() => setTimeout(() => window.open('https://immense-everglades-74554-f9bad473782a.herokuapp.com/', '_blank'), 500)} className='webdev-link mb-4 md:mb-16'>Site Designed and Built by Kris Kurzawa</button>
            </article>

        </footer>
    )
}

export default Footer