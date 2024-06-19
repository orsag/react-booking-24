import "./testing.css";

import React from 'react'

const TestingPage = () => {
    return (
        <div className="testingContainer">
            <div className="tBox">
                <img
                    src="./react.webp"
                    alt="react"
                    className="tFeaturedImg tLeft"
                />
            </div>
            <div className="tBox">
                <img
                    src="./vuejs.webp"
                    alt="vue"
                    className="tFeaturedImg2"
                />
            </div>
        </div>
    )
}

export default TestingPage;
