import { ReactNode, useState, Children } from "react";

const Slider = ({
  children,
  isSecond,
}: {
  children: ReactNode;
  isSecond?: boolean;
}) => {
  const slidesArray = Children.toArray(children) as ReactNode[];
  const [curr, setCurr] = useState(isSecond ? 1 : 0);
  const prev = () =>
    setCurr((curr) => (curr === 0 ? slidesArray.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slidesArray.length - 1 ? 0 : curr + 1));

  return (
    <div className="overflow-hidden relative max-w-[648px] mx-auto">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slidesArray}
      </div>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          <div
            onClick={prev}
            className={`transition-all w-3 h-3 rounded-full bg-[#156BCA] ${
              curr === 0 ? "p-2" : "bg-opacity-50"
            }`}
          ></div>
          <div
            onClick={next}
            className={`transition-all w-3 h-3 rounded-full bg-[#156BCA] ${
              curr === 1 ? "p-2" : "bg-opacity-50"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
