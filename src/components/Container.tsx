import React from 'react';

interface ContainerProps {
  children?: React.ReactNode,
  className?: string
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={`flex px-6 w-full flex-row relative flex-nowrap items-center justify-between max-w-[1280px] mx-auto mb-5 ${className}`}>
      {children}
    </div>
  );
};

export default Container;