import './Landing.css';
import Logo from '/favicon.png'

const Landing = () => {
    return (
        <main className='fade-in flex justify-center items-center h-screen'>
            <article className='logo-spin'>
                <img src={Logo} alt="logo" className='fade-out' />
                <h2 className='fade-out text-2xl lg:text-4xl'>Web Devloper</h2>
            </article>

        </main>
    )
}

export default Landing