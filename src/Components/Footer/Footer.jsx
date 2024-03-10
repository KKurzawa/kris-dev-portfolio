import './Footer.css';

const Footer = () => {
    const today = new Date();
    return (
        <footer className='flex flex-col items-center'>
            <p>Copyright &copy; {today.getFullYear()} Kriskurzawadev - All Rights Reserved</p>
            <button onClick={() => setTimeout(() => window.open('https://immense-everglades-74554-f9bad473782a.herokuapp.com/', '_blank'), 500)} className='webdev-link'>Site Designed and Built by Kris Kurzawa</button>
        </footer>
    )
}

export default Footer