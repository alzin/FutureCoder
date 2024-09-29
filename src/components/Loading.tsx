"use client"

import { Spinner } from "@nextui-org/react";

const Loading = () => {
  
    return (
        <div className="w-full h-[calc(100vh-200px)] flex items-center justify-center">
            <Spinner label="Loading" color="primary" labelColor="primary" />
        </div>
    )
}

export default Loading