"use client"

import { Button } from '@nextui-org/react';
import React, { Children } from 'react';

interface StepProps {
  label: string,
  children: React.ReactNode
}

interface StepperProps {
  children: React.ReactNode;
  currentStep: number
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>
}

export const Step = ({ children, label }: StepProps) => (
  <div className="space-y-8 mb-8">
    <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-start w-full min-h-[70vh] flex-col border-l-4 border-purple-500">
      <h2 className="text-xl font-semibold text-purple-700 mb-2">{label}</h2>
      {children}
    </div>
  </div>
);


const Stepper = ({ children, currentStep, setCurrentStep }: StepperProps) => {

  return (
    <div className="py-6 w-full">

      <div className='w-full'>
        {Children.toArray(children)[currentStep]}
      </div>

      <div className="flex justify-between space-x-4">

        {/* <Button
          onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
          disabled={currentStep === 0}
          className={`px-4 py-2 bg-gray-200 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-colors duration-300 ${currentStep === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Previous
        </Button>

        {currentStep !== 0 &&
          <Button
            onClick={() => setCurrentStep(prev => Math.min(4 - 1, prev + 1))}
            disabled={currentStep === 4}
            className={`px-4 py-2 bg-gray-200 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-colors duration-300 ${currentStep === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Next
          </Button>}
 */}


      </div>

    </div >
  );
};

export default Stepper;