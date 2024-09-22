import React from 'react';
import { Spinner } from "@nextui-org/react";

interface LoadingDataProps {
  data: any[] | null,
  emptyMessage: string,
  children: React.ReactNode
  className?: string
}

const LoadingData: React.FC<LoadingDataProps> = ({ children, data, emptyMessage, className }) => {
  return (
    <>
      {
        data && data.length > 0 ? <div className={className}>{children}</div> :
          data && data.length === 0 ? <div className={`flex items-center justify-center py-5 ${className}`}>{emptyMessage}</div> :
            <div className={`flex items-center justify-center py-5 ${className}`}><Spinner /></div>
      }
    </>
  );
};

export default LoadingData;