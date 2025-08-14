import { useState } from "react";
import Box from "./Box";

const BoxContainer = () => {
  const boxes: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [selectedBoxs, setSelectedBoxs] = useState<number[]>([]);

  // Function for clearing all box selections
  const handleClearSelections = () => {
    setSelectedBoxs([]);
  };
  return (
    <div className="flex flex-col justify-center items-center h-full bg-[#242424]">
      <div className="grid grid-cols-3 w-fit gap-1">
        {boxes.map((box: number) => (
          <Box
            key={box}
            selectedBoxs={selectedBoxs}
            setSelectedBoxs={setSelectedBoxs}
            box={box}
          />
        ))}
      </div>

      <button
        onClick={handleClearSelections}
        className="bg-[#1a1a1a] text-white px-4 py-3 border rounded-md mt-3 border-[#1a1a1a] hover:border-[#646cff] cursor-pointer"
      >
        Clear
      </button>
    </div>
  );
};

export default BoxContainer;
