import React, { useState } from 'react';

const ColorPicker = () => {
  const [color, setColor] = useState('');

  const handleChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <> 
    
    <div className="flex flex-col items-center  mt-8">
      <div className='font-extrabold'>Click On Box too choose a Color</div>
      <input
      // placeholder='Click o choose a color'
      type="color"
      value={color}
        onChange={handleChange}
        className="w-20 h-10"
        />
      <div
        className="w-96 h-48 mt-4 rounded border-4"
        // onChange={handleChange}
        style={{ backgroundColor: color }}
        ></div>
    </div>
        </>
  );
};

export default ColorPicker;
