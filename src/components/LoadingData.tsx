import React from 'react';
import { Spinner } from "@nextui-org/react";

interface LoadingDataProps {
  data: any[] | null,
  emptyMessage: string,
  children: React.ReactNode
}

const LoadingData: React.FC<LoadingDataProps> = ({ children, data, emptyMessage }) => {
  return (
    <>
      {
        data && data.length > 0 ? children :
          data && data.length === 0 ? <div className='flex items-center justify-center py-5'>{emptyMessage}</div> :
            <div className='flex items-center justify-center py-5'><Spinner /></div>
      }
    </>
  );
};

export default LoadingData;