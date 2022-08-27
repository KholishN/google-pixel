export default function Header() {
  return (
    <div className="px-5 py-2  bg-slate-500">
      <div className=" mx-10 flex flex-row justify-between">
        <h1 className="text-2xl font-bold p-7">Iphone</h1>
        <div className="flex flex-row">
          <div className=" p-7 pr-0">
            <div className="mx-2">
              <div className="flex flex-col pr-0">
                <span>Rp.10.000.000</span>
                <div className="text-xs">
                  Free Delivery
                  <sup>†</sup>
                </div>
              </div>
            </div>
          </div>
          <div className="p-5 pl-2">
            <button className="px-11 h-14 blue-thame text-white text-2xl font-medium rounded">
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
