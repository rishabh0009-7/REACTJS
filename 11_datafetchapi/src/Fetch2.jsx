import React, { useState, useEffect } from 'react';

const Fetch2 = () => {
    const [apiData, setApiData] = useState([]); // State to hold fetched data

    useEffect(() => {
        const fetchDataFromApi = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/todos");
                const data = await response.json();
                console.log("Fetched data:", data); // Debugging
                setApiData(data); // Store the data in state
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchDataFromApi();
    }, []); // Run only once after component mounts

    return (
        <div>
            {apiData.length > 0 ? ( // Render data only if it's available
                apiData.map((data) => (
                    <div key={data.id}>
                        <h3>{data.title}</h3>
                    </div>
                ))
            ) : (
                <p>Loading...</p> // Display a loading message until data is fetched
            )}
        </div>
    );
};

export default Fetch2;
