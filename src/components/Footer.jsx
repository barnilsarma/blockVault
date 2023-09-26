import { Link } from 'react-router-dom'
const Col = (props) => {
    return (
        <div className='flex flex-col justify-around items-center md:items-start'>{props.children}</div>
    );
}
const Footer = () => {
    return (
        <footer className="flex flex-col justify-around items-center bg-[#bbbbdd] p-[2rem] gap-[1.5rem]">
            <div className='flex flex-col md:flex-row justify-around items-center gap-[2rem]'>
                <Col>
                    <Link>SUPPORT</Link>
                    <Link>CONTACT US</Link>
                    <Link>RESOURCES</Link>
                </Col>
                <p className='p-[2rem] w-[40%] text-center'>
                    We value your privacy and security. Your documents are safe with us and there is no unauthorized access of them.
                </p>
                <Col>
                    <Link>ABOUT</Link>
                    <Link>DASHBOARD</Link>
                    <Link>TEAM</Link>
                </Col>

            </div>
            <h5 style={{ margin: '0 auto', textAlign: 'center', marginTop: '1rem' }}>Copyright &copy; WebManiacs 2023 </h5>
        </footer >
    );
}
export default Footer;