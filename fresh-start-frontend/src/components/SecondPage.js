import { useState, useEffect } from "react";
import "./SecondPage.css";

function SecondPage({ data, onSubmit }) {
    function getColor() {
        return (
            "hsl(" +
            360 * Math.random() +
            "," +
            (30 + 70 * Math.random()) +
            "%," +
            (40 + 10 * Math.random()) +
            "%)"
        );
    }

    const createDivs = (data) => {
        const divs = [];
        let currentDiv = [];

        for (let i = 0; i < data.length; i++) {
            const content = data[i];
            currentDiv.push(
                <span
                    key={`span-${i}`}
                    className="resolution"
                    style={{ color: getColor() }}
                >
                    {content.content}
                </span>
            );

            if (currentDiv.length === 10 || i === data.length - 1) {
                // If we've added 10 elements or reached the end of the data, create a new div
                divs.push(
                    <div key={`div-${divs.length}`} className="resolutions">
                        {currentDiv}
                    </div>
                );
                currentDiv = []; // Reset the current div
            }
        }

        return divs;
    };

    return (
        <>
            <div className="data-container">{createDivs(data)}</div>
            <button onClick={() => onSubmit(false)}>Back</button>
        </>
    );
}

export default SecondPage;
