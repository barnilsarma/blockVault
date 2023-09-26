const Discover_card = (props) => {
    return (
        <div className="flex flex-col items-center justify-around">
            <h1 className="text-center">{props.title}</h1>
            <p className="text-center">
                {props.desc}
            </p>
        </div>
    );
}
export default Discover_card;