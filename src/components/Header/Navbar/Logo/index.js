import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <nav className=" flex">
      <Link to={"/"} className="flex items-center ">
        <figure>
          <img src="/logoWeb.png" className="w-[100px] h-full" alt="logo" />
        </figure>
        <div className="flex flex-col justify-center text-left pl-1"></div>
      </Link>
    </nav>
  );
};

export default Logo;
