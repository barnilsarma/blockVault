import { Link } from "react-router-dom";

const DashboardSideBar = () => {
  const button = [
    {
      name: "Uploads",
      img: "https://res.cloudinary.com/dyuggtbjl/image/upload/v1695473976/sih/uploadicon_fwt1oc.svg",
      dest: "/uploads",
    },
    {
      name: "Search",
      img: "https://res.cloudinary.com/dyuggtbjl/image/upload/v1695473969/sih/search_nf0xls.svg",
      dest: "/search",
    },
    {
      name: "Logs",
      img: "https://res.cloudinary.com/dyuggtbjl/image/upload/v1695473975/sih/logsicon_z41ujr.svg",
      dest: "/logs",
    },
    {
      name: "Notifications",
      img: "https://res.cloudinary.com/dyuggtbjl/image/upload/v1695473973/sih/notificationicon_tt8usd.svg",
      dest: "/notifications",
    },
    {
      name: "Recent",
      img: "https://res.cloudinary.com/dyuggtbjl/image/upload/v1695473972/sih/recent_myf2qt.svg",
      dest: "/recent",
    },
    {
      name: "Progress",
      img: "https://res.cloudinary.com/dyuggtbjl/image/upload/v1695473971/sih/progress_br5vd7.svg",
      dest: "/progress",
    },
    {
      name: "Share",
      img: "https://res.cloudinary.com/dyuggtbjl/image/upload/v1695473971/sih/share_bhsjhn.svg",
      dest: "/share",
    },
  ];

  return (
    <div className="flex flex-col border-2 h-[36rem] w-[25%] rounded-3xl p-5 gap-7">
      {button.map((button) => (
        // eslint-disable-next-line react/jsx-key
        <Link to={button.dest} className="flex justify-between items-center bg-blue-700 text-white h-16 pl-7 pr-10 rounded-full">
          <h1 className="text-xl">{button.name}</h1>
          <img src={button.img} alt="" className="invert h-5"/>
        </Link>
      ))}
    </div>
  );
};

export default DashboardSideBar;
