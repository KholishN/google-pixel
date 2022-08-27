import Logo from "../../assets/logo.webp";
import { HiShoppingCart } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";
import { BsQuestionCircleFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
export default function Navbar() {
  return (
    <div className=" items-center h-14 sticky top-0 bg-white">
      <div className="mx-10 px-5 flex flex-row justify-between h-14 items-center">
        <div>
          <img src={Logo} alt="logo" className="h-9 w-9 m" />
        </div>

        <div className="flex flex-row">
          <div className="w-12 text-2xl ">
            <AiOutlineSearch />
          </div>
          <div className="w-12 text-2xl lg:hidden sm:hidden">
            <BsQuestionCircleFill />
          </div>
          <div className="w-12 text-2xl">
            <HiShoppingCart />
          </div>
          <div className="w-12 text-2xl">
            <FaUserCircle />
          </div>
        </div>
      </div>
    </div>
  );
}
