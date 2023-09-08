import { SelectFromTo } from "./SelectFromTo";
import { Input } from "./ui/input";

export default function Filter() {
  return (
    <div className="flex flex-col py-4 px-4 text-sm gap-4 max-w-sm">
      <div className="flex sm:flex-col sm:items-start items-center gap-2 justify-between">
        <div>Name</div>
        <Input className="w-3/4 sm:w-full" />
      </div>
      <div className="flex sm:flex-col sm:items-start items-center gap-2 justify-between">
        <div>Category</div>
        <Input className="w-3/4 sm:w-full" />
      </div>
      <div className="flex sm:flex-col sm:items-start items-center gap-2 justify-between">
        <div>Players</div>
        <div className="flex w-3/4 gap-4">
          <SelectFromTo />
          <SelectFromTo />
        </div>
      </div>
      <div className="flex sm:flex-col sm:items-start items-center gap-2 justify-between">
        <div>Time</div>
        <div className="flex w-3/4 gap-4">
          <SelectFromTo />
          <SelectFromTo />
        </div>
      </div>
    </div>
  );
}
