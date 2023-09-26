import Navbar from './Navbar'
import DashboardSideBar from './DashboardSideBar'
import Footer from './Footer'

const Logs = () => {
  return (
    <div className='flex flex-col w-full'>
      <Navbar/>
      <section className='flex justify-between items-center h-[4rem] w-[full]'>
        <h1>Dashboard</h1>
        <div className='flex justify-around items-center w-[15rem] h-[3rem] border-2 '>
            <div className='flex gap-2'>
                <img src="https://res.cloudinary.com/dyuggtbjl/image/upload/v1695476447/sih/download_pjltie.svg" alt="" />
                <h1>100</h1>
            </div>
            <div className='flex gap-2'>
                <img src="https://res.cloudinary.com/dyuggtbjl/image/upload/v1695476447/sih/download_pjltie.svg" alt="" />
                <h1>100</h1>
            </div>
        </div>
      </section>
      <section className='flex justify-around items-center mb-16'>
        <DashboardSideBar/>
        <div className='flex flex-col gap-5 border-2 h-[36rem] w-[60%] items-center p-5 rounded-3xl overflow-auto'>
            <div className='h-10 w-96 flex '>
              <h1>Sort By</h1>
              <select name="" id="" className='h-10 w-96 text-black'>
                <option value="File Size">File Size</option>
                <option value="File Size">Time Uploaded</option>
                <option value="File Size"></option>
              </select>
            </div>
            <div className='flex justify-around items-center w-[90%] p-3 bg-blue-700 rounded-xl text-white'>
                <img src="https://res.cloudinary.com/dyuggtbjl/image/upload/v1695476167/sih/fileicon_epacmu.svg" alt="" className='h-8 invert'/>
                <div className='flex flex-col gap-2 -ml-24'>

                <div className='flex flex-col justify-center items-left'>
                    <h1 className='text-lg'>FILE NAME</h1>
                    
                </div> 
                <div className='flex justify-center items-center text-sm gap-7'>
                    <p>15 MB</p>
                    <p>UPLOAD DATE</p>
                    <p>TYPE</p>
                </div>
                </div>
                <div className='flex gap-24 ml-10'>

                <img src="https://res.cloudinary.com/dyuggtbjl/image/upload/v1695476349/sih/eyeicon_eldba9.svg" alt="" className='h-6 invert hover:invert-0'/>
                <img src="https://res.cloudinary.com/dyuggtbjl/image/upload/v1695476447/sih/download_pjltie.svg" alt="" className='h-6 invert hover:invert-0'/>
                </div>
            </div>
            <div className='flex justify-around items-center w-[90%] p-3 bg-blue-700 rounded-xl text-white'>
                <img src="https://res.cloudinary.com/dyuggtbjl/image/upload/v1695476167/sih/fileicon_epacmu.svg" alt="" className='h-8 invert'/>
                <div className='flex flex-col gap-2 -ml-24'>

                <div className='flex flex-col justify-center items-left'>
                    <h1 className='text-lg'>FILE NAME</h1>
                    
                </div> 
                <div className='flex justify-center items-center text-sm gap-7'>
                    <p>15 MB</p>
                    <p>UPLOAD DATE</p>
                    <p>TYPE</p>
                </div>
                </div>
                <div className='flex gap-24 ml-10'>

                <img src="https://res.cloudinary.com/dyuggtbjl/image/upload/v1695476349/sih/eyeicon_eldba9.svg" alt="" className='h-6 invert hover:invert-0'/>
                <img src="https://res.cloudinary.com/dyuggtbjl/image/upload/v1695476447/sih/download_pjltie.svg" alt="" className='h-6 invert hover:invert-0'/>
                </div>
            </div>
            <div className='flex justify-around items-center w-[90%] p-3 bg-blue-700 rounded-xl text-white'>
                <img src="https://res.cloudinary.com/dyuggtbjl/image/upload/v1695476167/sih/fileicon_epacmu.svg" alt="" className='h-8 invert'/>
                <div className='flex flex-col gap-2 -ml-24'>

                <div className='flex flex-col justify-center items-left'>
                    <h1 className='text-lg'>FILE NAME</h1>
                    
                </div> 
                <div className='flex justify-center items-center text-sm gap-7'>
                    <p>15 MB</p>
                    <p>UPLOAD DATE</p>
                    <p>TYPE</p>
                </div>
                </div>
                <div className='flex gap-24 ml-10'>

                <img src="https://res.cloudinary.com/dyuggtbjl/image/upload/v1695476349/sih/eyeicon_eldba9.svg" alt="" className='h-6 invert hover:invert-0'/>
                <img src="https://res.cloudinary.com/dyuggtbjl/image/upload/v1695476447/sih/download_pjltie.svg" alt="" className='h-6 invert hover:invert-0'/>
                </div>
            </div>
            <div className='flex justify-around items-center w-[90%] p-3 bg-blue-700 rounded-xl text-white'>
                <img src="https://res.cloudinary.com/dyuggtbjl/image/upload/v1695476167/sih/fileicon_epacmu.svg" alt="" className='h-8 invert'/>
                <div className='flex flex-col gap-2 -ml-24'>

                <div className='flex flex-col justify-center items-left'>
                    <h1 className='text-lg'>FILE NAME</h1>
                    
                </div> 
                <div className='flex justify-center items-center text-sm gap-7'>
                    <p>15 MB</p>
                    <p>UPLOAD DATE</p>
                    <p>TYPE</p>
                </div>
                </div>
                <div className='flex gap-24 ml-10'>

                <img src="https://res.cloudinary.com/dyuggtbjl/image/upload/v1695476349/sih/eyeicon_eldba9.svg" alt="" className='h-6 invert hover:invert-0'/>
                <img src="https://res.cloudinary.com/dyuggtbjl/image/upload/v1695476447/sih/download_pjltie.svg" alt="" className='h-6 invert hover:invert-0'/>
                </div>
            </div>
            <div className='flex justify-around items-center w-[90%] p-3 bg-blue-700 rounded-xl text-white'>
                <img src="https://res.cloudinary.com/dyuggtbjl/image/upload/v1695476167/sih/fileicon_epacmu.svg" alt="" className='h-8 invert'/>
                <div className='flex flex-col gap-2 -ml-24'>

                <div className='flex flex-col justify-center items-left'>
                    <h1 className='text-lg'>FILE NAME</h1>
                    
                </div> 
                <div className='flex justify-center items-center text-sm gap-7'>
                    <p>15 MB</p>
                    <p>UPLOAD DATE</p>
                    <p>TYPE</p>
                </div>
                </div>
                <div className='flex gap-24 ml-10'>

                <img src="https://res.cloudinary.com/dyuggtbjl/image/upload/v1695476349/sih/eyeicon_eldba9.svg" alt="" className='h-6 invert hover:invert-0'/>
                <img src="https://res.cloudinary.com/dyuggtbjl/image/upload/v1695476447/sih/download_pjltie.svg" alt="" className='h-6 invert hover:invert-0'/>
                </div>
            </div>
            <div className='flex justify-around items-center w-[90%] p-3 bg-blue-700 rounded-xl text-white'>
                <img src="https://res.cloudinary.com/dyuggtbjl/image/upload/v1695476167/sih/fileicon_epacmu.svg" alt="" className='h-8 invert'/>
                <div className='flex flex-col gap-2 -ml-24'>

                <div className='flex flex-col justify-center items-left'>
                    <h1 className='text-lg'>FILE NAME</h1>
                    
                </div> 
                <div className='flex justify-center items-center text-sm gap-7'>
                    <p>15 MB</p>
                    <p>UPLOAD DATE</p>
                    <p>TYPE</p>
                </div>
                </div>
                <div className='flex gap-24 ml-10'>

                <img src="https://res.cloudinary.com/dyuggtbjl/image/upload/v1695476349/sih/eyeicon_eldba9.svg" alt="" className='h-6 invert hover:invert-0'/>
                <img src="https://res.cloudinary.com/dyuggtbjl/image/upload/v1695476447/sih/download_pjltie.svg" alt="" className='h-6 invert hover:invert-0'/>
                </div>
            </div>
        </div>
      </section>
      {/* <section className='flex justify-around items-center mb-9'>
        <div className='flex flex-col justify-center items-center'>
          <h1>100</h1>
          <p>Files Transferred</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <h1>100</h1>
          <p>Size</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <h1>100</h1>
          <p>Uploaded</p>
        </div>
      </section> */}
      <Footer/>
    </div>
  )
}

export default Logs
