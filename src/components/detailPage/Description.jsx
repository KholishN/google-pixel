import Dropdown from "./Dropdown";
export default function Description() {
  return (
    <div>
      <div className="grid grid-cols-12 max-w-7xl gap-x-  m-auto">
        <div className="grid grid-cols-12 gap-x-6 col-start-2 col-end-13">
          <div className="col-start-1 col-end-5  border">
            <span>Text Specs</span>
          </div>
          <div className="col-start-6 col-end-13  border">
            <Dropdown />
          </div>
        </div>
      </div>
    </div>
  );
}
