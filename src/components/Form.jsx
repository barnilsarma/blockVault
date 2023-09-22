const Field = (props) => {
    return (
        <div className="flex flex-col items-start justify-around">
            <h2>{props.title}</h2>
            <input type={props.type} placeholder={props.placeholder} style={{ textAlign: 'left' }} />
        </div>
    );
}
const Form = (props) => {
    return (
        <div className="flex flex-col items-center justify-around">
            <h1>{props.title}</h1>
            <form method={props.method} target="_blank" action={props.action}>
                <Field title="Your Username" type="text" placeholder="Enter your username" />
                <Field title="Your Password" type="password" placeholder="Enter your password" />
                <input type="submit" value={props.title} />
            </form>
        </div>
    );
}
export default Form;