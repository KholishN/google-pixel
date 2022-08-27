import { Link } from "react-router-dom";
import Phone from ".././../assets/Phone1.png";

export default function Card() {
  return (
    <Link to="#" className="flex flex-col h-full">
      <div className="bg-slate-50">
        <div>
          <img src={Phone} alt="phone" className="py-12 px-6 animate" />
          <div className="p-5"></div>
        </div>
        <div>
          <div></div>
        </div>
      </div>
      <div className="flex flex-col pt-4">
        <div className="text-stone-700 text-lg font-bold">Iphone</div>
        <div>
          <div className="text-xl">RP.10.000.000</div>
        </div>
      </div>
    </Link>
  );
}
