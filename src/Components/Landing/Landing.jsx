import './Landing.css';
import Logo from '/favicon.png'

const Landing = () => {
    return (
        <main className='h-screen flex justify-center'>
            <article className='fade-out flex justify-center items-center h-screen'>
                <img src={Logo} alt="logo" className='logo' />
                <h2 className='logo-text text-2xl lg:text-4xl'>Web Devloper</h2>
            </article>

        </main>
    )
}

export default Landing