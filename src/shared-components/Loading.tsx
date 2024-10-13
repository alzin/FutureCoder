"use client"

import { Spinner } from "@nextui-org/react";

const Loading = () => {

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <Spinner label="Loading ..." color="primary" labelColor="primary" />
        </div>
    )
}

export default Loading