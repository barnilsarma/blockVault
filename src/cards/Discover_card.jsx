const Discover_card = (props) => {
    return (
        <div className="flex flex-col items-center justify-around ease duration-1000 hover:scale-[1.1] m-[2rem] p-[2rem]" style={{ border: '0px solid transparent', borderRadius: '2rem', scale: '1', boxShadow: '0 0 5rem #000011' }}>
            <h1 className="text-center text-[1.2rem] md:text-[1.5rem]">{props.title}</h1>
            <p className="text-center text-[#885599]">
                {props.desc}
            </p>
        </div>
    );
}
export default Discover_card;