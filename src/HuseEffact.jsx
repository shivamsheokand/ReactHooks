import { useEffect, useState } from "react";

const HuseEffact = () => {
  const [data, setData] = useState(""); // Initial state as an empty string

  // useEffect hook to fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const result = await response.json();
        setData(result); // Set the fetched data to state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Execute the async function inside the useEffect
  }, []); // Empty array ensures this runs once when the component mounts

  return (
    <div className="flex h-screen w-screen justify-center items-center flex-col">
      <h1 className="text-center text-3xl font-bold">
        Welcome to use Effect Hook
      </h1>
      <div>
        <p>Some API data :)</p>
        {/* Render fetched data or a loading message */}
        <p>{data ? JSON.stringify(data) : "Loading..."}</p>
      </div>
    </div>
  );
};

export default HuseEffact;
