import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <nav className=" flex">
      <Link to={"/"} className="flex items-center ">
        <figure>
          <img src="/logoWeb.png" className="w-[100px] h-full" alt="logo" />
        </figure>
      </Link>
    </nav>
  );
};

export default Logo;
