import { useState } from "react";

const DurationSlider = ({ 
    setXP = ()=>{} ,
    month = 'June',
    year = 2022
}) => {
  const [value, setValue] = useState(0);
  const handleChange = (event) => {
    setXP(event.target.value);
    setValue(event.target.value);
  };
  return (
    <div className="flex flex-col items-center justify-center w-full">
        <h5 className="text-center p-8 font-bold text-2xl">
            {`${month} ${year}`}
        </h5>
      <input
        id="rangeSlider"
        type="range"
        min={0}
        max={5}
        step={1}
        value={value}
        onChange={handleChange}
        className="w-full h-2 rounded-md appearance-none bg-white outline-none cursor-pointer accent-zinc-800"
      />
    </div>
  );
};

export default DurationSlider;
