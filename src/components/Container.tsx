import React from 'react';

const Container: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex px-6 w-full flex-row relative flex-nowrap items-center justify-between max-w-[1280px] mx-auto mb-5">
      {children}
    </div>
  );
};

export default Container;