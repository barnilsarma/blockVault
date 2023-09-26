import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
const Field = (props) => {
    return (
        <div className='flex flex-col justify-around items-start'>
            <h1>{props.heading}</h1>
            <input type="text" placeholder={props.placeholder} value={props.value} name={props.name} disabled style={{ border: '1px solid #000000', borderRadius: '1rem', color: '#000011', padding: '1rem', paddingRight: '10rem' }} />
        </div>
    );
}
const Profile = () => {
    const fields = [
        { heading: 'Your Name:', placeholder: 'Your name goes here...', value: 'B Sarma', name: 'FullName' },
        { heading: 'State:', placeholder: 'Your state goes here...', value: 'Assam', name: 'StateName' },
        { heading: 'District:', placeholder: 'Your district goes here...', value: 'Kamrup(M)', name: 'DistrictName' },
        { heading: 'City/Village/Town:', placeholder: 'Your city/village/town goes here...', value: 'Guwahati', name: 'CityName' },
        { heading: 'Locality:', placeholder: 'Your locality goes here...', value: 'North Guwahati', name: 'LocalityName' },
        { heading: 'Pincode:', placeholder: 'Your Pincode goes here...', value: '78101x', name: 'pinName' },
        { heading: 'Your Contact Number:', placeholder: 'Your contact number goes here...', value: '91xxxxxxxx', name: 'ContName' },
        { heading: 'Your Email address:', placeholder: 'Your Email goes here...', value: 'example@gmail.com', name: 'EmailName' }
    ];
    return (
        <div className="flex flex-col gap-[5rem]">
            <Navbar page='Profile' />
            <div className='flex flex-col md:flex-row justify-around items-start'>
                <img alt='your picture' src='https://res.cloudinary.com/dhry5xscm/image/upload/v1695716930/SIH-assets/blank-profile-picture-973460_1920_d39wzt.png' className="rounded-full h-[5rem] w-[5rem] md:h-[20rem] md:w-[20rem]" />
                <div>
                    <form className="flex flex-col gap-[1rem]">
                        {fields.map((item) => <Field heading={item.heading} placeholder={item.placeholder} value={item.value} name={item.name} />)}
                    </form>
                </div>
            </div>
            <Link className='bg-[#000022] text-[#ffffff] p-[2rem] pl-[10rem] pr-[10rem] rounded-[1rem] ease duration-[500ms] hover:bg-[#76b1ff] hover:text-[#000022] hover:rounded-[2rem]' style={{ margin: '0 auto' }}>UPDATE YOUR PROFILE</Link>
            <Footer />
        </div>
    );
}
export default Profile;