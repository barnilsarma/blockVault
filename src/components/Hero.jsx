import { Link } from 'react-router-dom'
function delay(milisec) {
    return new Promise((resolve) => setTimeout(() => resolve(''), milisec));
}
async function type(word, element) {
    for (let i = 0; i < word.length; i++) {

    }
}
const Hero = () => {
    return (
        <div className='text-center' style={{ backgroundImage: "url('https://res.cloudinary.com/dhry5xscm/image/upload/v1695586115/SIH-assets/COMPUTERS-removebg-preview_s82ppi.png')" }}>
            <div style={{ backgroundColor: '#000020aa', padding: '5rem', backdropFilter: 'blur(2px)' }}>
                <h1 className='text-[5rem] text-[#aaeeff] md:text-[8rem] m-[1rem]' style={{ textShadow: '0 0 2rem #aaeeff' }}>BlockVault</h1>
                <p className='text-[1.8rem] text-[#a3aaff] md:text-[2rem] m-[1rem]' style={{ textShadow: '0 0 2rem #a341ff' }}>Making your Documents safe, secure and systematic</p>
                <p className='text-[1.8rem] text-[#a3aaff] md:text-[2rem] m-[1rem]' style={{ textShadow: '0 0 2rem #a341ff' }}>Using BlockVault, you can manage your</p>
                <div className='flex flex-col items-center justify-center md:flex-row' style={{ columnGap: '2rem', rowGap: '2rem' }}>
                    <Link to='/Login' className='bg-[#3355ffaa] p-[1rem] rounded-[1rem] text-[#a3ffff] ease duration-1000 hover:bg-[#aabb55] hover:text-[#000011]'>LOGIN</Link>
                    <Link to='/Register' className='bg-[#3355ffaa] p-[1rem] rounded-[1rem] text-[#a3ffff] ease duration-1000 hover:bg-[#aabb55] hover:text-[#000011]'>REGISTER</Link>
                </div>
            </div>
        </div>
    );
}
export default Hero;