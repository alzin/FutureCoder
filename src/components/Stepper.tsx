"use client"

import { Button } from '@nextui-org/react';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

interface StepProps {
  label: string;
  description?: string;
}

interface StepperProps {
  children: React.ReactNode;
  currentStep: number
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>
}

const Step = ({ label, description, children }: StepProps & { children: React.ReactNode }) => (
  <React.Fragment>{children}</React.Fragment>
);

Step.displayName = 'Step';

const Stepper = ({ children, currentStep, setCurrentStep }: StepperProps) => {

  const steps = React.Children.toArray(children) as React.ReactElement[];

  return (
    <div className="py-6 w-full">
      <div className="space-y-8 mb-8">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className={`bg-white rounded-lg shadow-md p-6 flex items-center justify-start w-full min-h-[70vh] flex-col ${currentStep === index ? 'border-l-4 border-blue-500 block' : 'hidden'
              }`}>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{step.props.label}</h2>
              {step.props.description && <p className="text-sm text-gray-600 mb-4">{step.props.description}</p>}
              {currentStep === index && step.props.children}
            </div>
          </React.Fragment>
        ))}
      </div>

      <div className="flex justify-between space-x-4">
        <Button
          onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
          disabled={currentStep === 0}
          className={`px-4 py-2 bg-gray-200 text-gray-700 rounded ${currentStep === 0 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
        >
          Previous
        </Button>

      </div>

    </div>
  );
};

Stepper.Step = Step;

export default Stepper;