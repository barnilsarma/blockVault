import { Link } from 'react-router-dom'
const Hero = () => {
    return (
        <div className='text-center'>
            <h1>BlockVault</h1>
            <p>Making your Documents safe, secure and systematic</p>
            <p>Using BlockVault, you can manage your</p>
            <div className='flex flex-col items-center justify-center md:flex-row' style={{ columnGap: '2rem' }}>
                <Link to='/Login'>LOGIN</Link>
                <Link to='/Register'>REGISTER</Link>
            </div>
        </div>
    );
}
export default Hero;