import { Link } from 'react-router-dom'
import Form from '../components/Form'
const Login = () => {
    return (
        <div>
            <Link to='/'>HOME</Link>
            <Form title="LOGIN" />
        </div>
    );
}
export default Login;