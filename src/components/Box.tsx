interface BoxProps {
  box: number;
  selectedBoxs: number[];
  setSelectedBoxs: React.Dispatch<React.SetStateAction<number[]>>;
}
const Box = ({ box, selectedBoxs, setSelectedBoxs }: BoxProps) => {
  // Function for selecting box
  const handleSelectBox = (boxNumber: number) => {
    if (!selectedBoxs.includes(boxNumber)) {
      setSelectedBoxs([...selectedBoxs, boxNumber]);
    }
  };

  return (
    <div
      onClick={() => handleSelectBox(box)}
      className={`box select-none bg-[#242424] flex justify-center items-center w-8 h-8 md:w-16 md:h-16 border border-white rounded-md hover:bg-white cursor-pointer transition-all ease-in-out duration-700  ${
        selectedBoxs.includes(box) && "bg-white"
      }`}
    >
      <span>{selectedBoxs.includes(box) ? box : ""}</span>
    </div>
  );
};

export default Box;
