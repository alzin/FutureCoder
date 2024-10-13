import React from 'react';
import { Spinner } from "@nextui-org/react";

interface LoadingDataProps {
  data: any[] | object | null,
  emptyMessage?: string,
  children: React.ReactNode
  className?: string
}

const LoadingData: React.FC<LoadingDataProps> = ({ children, data, emptyMessage = "Empty", className }) => {
  return (
    <>
      {
        data ?
          // Array
          Array.isArray(data) ?

            // non empty array
            data.length > 0 ? <div className={className}>{children}</div>

              // empty array
              : <div className={`flex items-center justify-center py-5 ${className}`}>{emptyMessage}</div>

            // object
            : <div className={className}>{children}</div>

          :
          <div className={`flex items-center justify-center py-5 ${className}`}>
            <Spinner label="Loading ..." color="primary" labelColor="primary" />
          </div>

      }
    </>
  );
};

export default LoadingData;
