import { Checkbox } from "@material-tailwind/react";

export default function CheckBox() {
  return (
    <div>
      <div className="px-6 pb-6 min-h-screen">
        <div className="mb-5 sticky top-14">
          <div className="mb-5 text-sm font-bold text-slate-400">
            Product Type
          </div>
          <div className="flex flex-col">
            <Checkbox defaultChecked label="Phones" />
            <Checkbox defaultChecked label="Connected Home" />
            <Checkbox defaultChecked label="Fitbit" />
          </div>
        </div>
      </div>
    </div>
  );
}
