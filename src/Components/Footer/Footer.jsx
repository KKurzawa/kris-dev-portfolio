import './Footer.css';
import { icons } from '../../assets/data/SMIcons';

const Footer = () => {
    const today = new Date();
    return (
        <footer className='footer flex flex-col items-center bg-[#100607] text-[whitesmoke]'>
            <article className='flex w-full flex-row justify-center'>
                <h2 className='pr-10'> <a href='mailto:kurzawa1@yahoo.com'>Email Me</a></h2>
                <h2 className='pl-10'><a href='tel:2485682806'>Call Me</a></h2>
            </article>
            <article className='flex'>
                {icons.map((item) => (
                    <i key={item.id} className='text-xl p-3 lg:text-5xl lg:p-7'><a href={item.link} target='__blank'>{item.symbol}</a></i>
                ))}
            </article>
            <h2 className='topLink'><a href='#navbar'>to the top</a></h2>
            <p>Copyright &copy; {today.getFullYear()} Kriskurzawadev - All Rights Reserved</p>
            <button onClick={() => setTimeout(() => window.open('https://immense-everglades-74554-f9bad473782a.herokuapp.com/', '_blank'), 500)} className='webdev-link'>Site Designed and Built by Kris Kurzawa</button>
        </footer>
    )
}

export default Footer