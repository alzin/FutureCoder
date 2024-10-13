"use client"

import { Spinner } from "@nextui-org/react";

const Loading = () => {

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <Spinner label="Loading ..." color="secondary" labelColor="secondary" />
        </div>
    )
}

export default Loading