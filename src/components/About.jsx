const About = () => {
    return (
        <div id='about' className="flex flex-col items-center justify-around md:flex-row-reverse" style={{ rowGap: '6rem', colGap: '2rem' }}>
            <img alt="About image" src='https://res.cloudinary.com/dhry5xscm/image/upload/v1695588648/SIH-assets/istockphoto-1493367306-1024x1024_uxi8y0.jpg' className='rounded-full h-[10rem] w-[10rem] scale-[2]' />
            <div className="text-center w-[40vw]" style={{ overflow: 'wrap' }}>
                <h1 className="text-[2rem] md:text-[5rem]">About E-Vault</h1>
                <p className="text-[1.2rem] md:text-[1.5rem] text-[#aaaaaa]">
                    In today's fast changing world, data storage and management is a huge task. Often people find difficulties in maintaining their important documents securely. That's where the role of a fully digitalized vault comes. E-vault, the whole new revolution in data management. One of the most unique features of this E-vault is that, it stores your data in a blockchain. That means, no third party control, no unwanted access and easy-to-access data.
                </p>
            </div>
        </div>
    );
}
export default About;