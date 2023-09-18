import { Link } from 'react-router-dom'
import { useState } from 'react'
const Navbar = () => {
    const navLinks = [{ name: 'HOME', dest: '' }, { name: 'ABOUT', dest: '' }, { name: 'ASSETS', dest: '' }];
    const [state, setState] = useState('150vw');
    const [trans, setTrans] = useState('0');
    const handleState = () => {
        setState(state === '150vw' ? '0vw' : '150vw');
        setTrans(state === '150vw' ? '1' : '0');
    }
    return (
        <>
            <div className='flex flex-row justify-around text-[#000000] uppercase bg-[#ffffff]' style={{ borderBottom: '3px solid #00000022', paddingBottom: '1rem', paddingTop: '1rem' }}>
                <img alt='LOGO' />
                <img src={state === '150vw' ? 'https://res.cloudinary.com/dhry5xscm/image/upload/v1695026962/SIH-assets/bars-solid_1_nf6zhp.svg' : 'https://res.cloudinary.com/dhry5xscm/image/upload/v1695026980/SIH-assets/xmark-solid_lte4ed.svg'} alt='hamburger' className='h-[2rem] w-[2rem] visible md:invisible' onClick={handleState} style={{ position: 'absolute', left: '80vw' }} />
                <div className='w-0 flex flex-row justify-around invisible md:visible md:w-[50%]'>
                    {navLinks.map((item) => <Link to={item.dest}>{item.name}</Link>)}
                </div>
            </div>
            <ul className='h-[80vh] w-[100vw] text-center bg-[#aaaaaa] flex flex-col justify-around visible md:invisible' style={{ position: 'absolute', top: '3.5rem', transform: `translateX(${state})`, transition: 'ease 1000ms', opacity: `${trans}` }}>
                {navLinks.map((item) => <Link to={item.dest}>{item.name}</Link>)}
            </ul>
        </>
    );
}
export default Navbar;