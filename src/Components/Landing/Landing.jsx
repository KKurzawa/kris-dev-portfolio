import './Landing.css';
import Logo from '/navLogo.png'

const Landing = () => {
    return (
        <>
            {/* md and lg  */}
            <main className='landing-main-container hidden h-screen md:flex justify-center bg-[#980D1C]'>
                <article className='fade-out flex justify-center items-center h-screen'>
                    <img src={Logo} alt="logo" className='logo' />
                    <h2 className='logo-text md:text-5xl text-[#eed29b]'>Web Devloper</h2>
                </article>
            </main>
            {/* sm  */}
            <main className='sm-landing-main-container h-screen bg-[#980D1C] flex justify-center md:hidden'>
                <article className='sm-fade-out flex justify-center items-center h-screen '>
                    <img src={Logo} alt="logo" className='sm-logo' />
                    <h2 className='sm-logo-text text-3xl lg:text-5xl text-[#eed29b]'>Web Devloper</h2>
                </article>
            </main>
        </>
    )
}

export default Landing