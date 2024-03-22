import './Landing.css';
import Logo from '/navLogo.png'

const Landing = () => {
    return (
        <>
            {/* md and lg  */}
            <main className='landing-main-container hidden md:flex justify-center w-full h-screen'>
                <article className='fade-out flex flex-col justify-center items-center h-screen'>
                    <img src={Logo} alt="logo" className='logo' />
                    <h2 className='logo-text md:text-5xl'>Web Devloper</h2>
                </article>
            </main>
            {/* sm  */}
            <main className='sm-landing-main-container flex justify-center md:hidden w-full h-screen'>
                <article className='sm-fade-out flex flex-col justify-center items-center w-full h-screen '>
                    <img src={Logo} alt="logo" className='sm-logo' />
                    <h2 className='sm-logo-text text-3xl lg:text-5xl'>Web Devloper</h2>
                </article>
            </main>
        </>
    )
}

export default Landing