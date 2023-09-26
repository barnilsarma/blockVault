import { Link } from 'react-router-dom'
import { useState } from 'react'
const Navbar = (props) => {
    const navLinks = [{ name: 'HOME', dest: '/' }, { name: 'PROFILE', dest: '/Profile' }];
    const [state, setState] = useState('150vw');
    const [trans, setTrans] = useState('0');
    const handleState = () => {
        setState(state === '150vw' ? '0vw' : '150vw');
        setTrans(state === '150vw' ? '1' : '0');
    }
    return (
        <>
            <div className='flex flex-row justify-around text-[#000000] uppercase bg-[#ffffff]' style={{ borderBottom: '3px solid #00000022', paddingBottom: '1rem', paddingTop: '1rem' }}>
                <img alt='LOGO' src='https://res.cloudinary.com/dhry5xscm/image/upload/v1695585502/SIH-assets/vault-removebg-preview_tonyar.png' className='h-[80%] w-[2rem]' />
                <img src={state === '150vw' ? 'https://res.cloudinary.com/dhry5xscm/image/upload/v1695026962/SIH-assets/bars-solid_1_nf6zhp.svg' : 'https://res.cloudinary.com/dhry5xscm/image/upload/v1695026980/SIH-assets/xmark-solid_lte4ed.svg'} alt='hamburger' className='h-[2rem] w-[2rem] visible md:invisible' onClick={handleState} style={{ position: 'absolute', left: '80vw' }} />
                <div className='w-0 flex flex-row justify-around invisible md:visible md:w-[50%]'>
                    {navLinks.map((item) => <Link to={item.dest} className='scale-1 ease duration-1000 hover:scale-[1.2]'>{item.name}</Link>)}
                    <a className='scale-1 ease duration-1000 hover:scale-[1.2]' href={props.page === 'Home' ? '#about' : `/#about`}>ABOUT</a>
                    <Link to='' style={{ border: '1px solid #000000' }} className='pl-[1rem] pr-[1rem] rounded-[0] scale-1 ease duration-1000 hover:rounded-[1rem] hover:scale-[1.2]'>DASHBOARD</Link>
                </div>
            </div>
            <ul className='h-[80vh] w-[100vw] text-center bg-[#aaaaaa] flex flex-col justify-around visible md:invisible' style={{ position: 'absolute', top: '3.5rem', transform: `translateX(${state})`, transition: 'ease 1000ms', opacity: `${trans}`, zIndex: '5' }}>
                {navLinks.map((item) => <Link to={item.dest}>{item.name}</Link>)}
                <Link to='' style={{ border: '1px solid #000000', margin: '0 auto' }} className='pl-[1rem] pr-[1rem] rounded-[0] scale-1 ease duration-1000 hover:rounded-[1rem] hover:scale-[1.2]'>DASHBOARD</Link>
            </ul>
        </>
    );
}
export default Navbar;