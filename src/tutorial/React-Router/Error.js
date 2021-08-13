import React from 'react'
import { Link } from "react-router-dom";
function Error() {
    return (
        <div>
            <h1>Error 404 No Page Found</h1>
            <Link to="/" className="btn">Go Back To Homepage</Link>
        </div>
    )
}

export default Error
