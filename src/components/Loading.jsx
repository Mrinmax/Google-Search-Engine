import React from 'react';
import Loader from "react-loader-spinner";

function Loading() {
    return (
        <div className="flex justify-content items-center">
            <Loader type="puff" color="#00BFFF" height={550} width={80} />
        </div>
    )
}

export default Loading;
