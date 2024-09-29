import React, { useState } from 'react';

const InsuranceOptions = () => {
  const [selectedOption, setSelectedOption] = useState('Peace of mind');

  const options = [
    {
      name: 'Peace of mind',
      price: '$35',
      excess: '$0 Excess',
      bond: '$0 Bond',
      perDay: '/ day',
      label: 'Most Popular',
    },
    {
      name: 'Assured',
      price: '$25',
      excess: '$500 Excess',
      bond: '$0 Bond',
      perDay: '/ day',
    },
    {
      name: 'Basic',
      price: 'FREE',
      excess: '$3000 Excess',
      bond: '$3000 Bond',
    },
  ];

  return (
    <div className="w-fullp-4">
      <h1 className="text-2xl font-bold mb-4">1. Choose insurance</h1>
      <div className="flex justify-between space-x-4">
        {options.map((option) => (
          <div
            key={option.name}
            className={`relative w-1/3 p-4 border rounded-lg cursor-pointer ${
              selectedOption === option.name ? 'border-gray-500' : 'border-gray-300'
            }`}
            onClick={() => setSelectedOption(option.name)}
          >
            <input
              type="radio"
              name="insurance"
              id={option.name}
              className="hidden"
              checked={selectedOption === option.name}
              onChange={() => setSelectedOption(option.name)}
            />
            <label
              htmlFor={option.name}
              className="block text-lg font-semibold mb-2"
            >
              {option.name}
            </label>
            <div className="text-sm text-gray-500 mb-1">{option.excess}</div>
            <div className="text-sm text-gray-500">{option.bond}</div>
            <div className="mt-2 text-xl font-bold">
              <span className="text-pink-500">{option.price}</span>
              {option.perDay && <span>{option.perDay}</span>}
            </div>
            {option.label && (
              <span className="absolute bottom-32 left-2 bg-pink-200 text-pink-600 text-xs px-2 py-1 rounded-full">
                {option.label}
              </span>
            )}
          </div>
        ))}
      </div>
      <div className="mt-6 text-gray-500 cursor-pointer">
        + What are Excess and Bond?
      </div>
      <button className="mt-6 w-full py-3 bg-black text-white font-bold rounded-lg">
        Continue
      </button>
    </div>
  );
};

export default InsuranceOptions;
