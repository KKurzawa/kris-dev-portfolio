import './Landing.css';
import Logo from '/favicon.png'

const Landing = () => {
    return (
        <main className='flex justify-center items-center h-screen'>
            <article className='logo fadeOut'>
                <img src={Logo} alt="logo" className='' />
                <h2 className='text-2xl lg:text-4xl'>Web Devloper</h2>
            </article>

        </main>
    )
}

export default Landing