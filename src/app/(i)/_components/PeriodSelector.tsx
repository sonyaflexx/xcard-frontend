import { useState } from 'react';

function PeriodSelector() {
  const [selectedOption, setSelectedOption] = useState('lastMonth');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <select value={selectedOption} onChange={handleChange} className='text-xs outline-none dark:bg-gray-600 pr-2'>
        <option value="lastMonth">Last month</option>
        <option value="lastYear">Last year</option>
        <option value="allTime">All time</option>
        <option value="lastWeek">Last week</option>
      </select>
    </div>
  );
}

export default PeriodSelector;