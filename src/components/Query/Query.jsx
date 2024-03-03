import React, { useState } from "react";
import { BounceLoader } from "react-spinners";

const Query = () => {
  const [numTopics, setNumTopics] = useState(""); // State to store the number of topics
  const [csvFile, setCsvFile] = useState(null);
  const [topics, setTopics] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!csvFile) {
      console.error("Please upload a CSV file.");
      return;
    }

    setIsLoading(true);

    const formData = new FormData();
    formData.append("csvFile", csvFile);
    formData.append("numTopics", numTopics);

    fetch("http://localhost:5000/process-csv", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const topicsArray = data.topics.split("\n");
        setTopics(topicsArray);
        setIsLoading(false);

        // Log the response from the backend
        // Handle the response as needed, e.g., display topics on the UI
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsLoading(false);
        // Handle error, e.g., display an error message on the UI
      });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setCsvFile(file);
  };
  return (
    <div className="my-16 px-10">
      <h2 className="text-center text-3xl text-sky-900 font-bold mb-10">
        Drop Your Query
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="w-1/2 mx-auto bg-sky-300 py-8 rounded-md">
          <div className="text-center mb-3 ml-20 pl-2">
            <label
              htmlFor="csvFile"
              className="font-semibold text-sky-950 text-xl"
            >
              Upload CSV File:
            </label>
            <input
              type="file"
              id="csvFile"
              accept=".csv"
              onChange={handleFileChange}
              className="outline-0 border-0 ml-1 rounded-sm py-1 px-1"
            />
          </div>
          <div className="text-center">
            <label
              htmlFor="topicsNumber"
              className="font-semibold text-sky-950 text-xl"
            >
              Number of Topics :
            </label>
            <input
              type="text"
              value={numTopics}
              onChange={(e) => setNumTopics(e.target.value)}
              className="outline-0 border-0 ml-1 rounded-sm py-1 px-1"
            />
          </div>
          <div className="text-center mt-3 ml-14">
            <input
              type="submit"
              value="submit"
              className="bg-sky-700 text-slate-100 py-1 px-2 text-lg rounded-md cursor-pointer font-semibold hover:bg-orange-400 hover:text-slate-900"
            />
          </div>
        </div>
      </form>
      <div
        className={`my-10 ${
          isLoading
            ? "text-center"
            : "w-1/2 mx-auto bg-sky-300 py-8 px-14 pl-28 rounded-md"
        }`}
      >
        {isLoading ? (
          <div className="text-center pl-96 ml-72">
            <BounceLoader
              // height={130}
              // width={50}
              size={140}
              // color="#65a30d"
              color="#FB923C"
              margin={8}
            ></BounceLoader>
          </div>
        ) : (
          topics
            ?.filter((topic) => topic.trim() !== "") // Filter out empty topics
            .map(
              (topic, index) =>
                index < numTopics && (
                  <p
                    className="text-xl mb-3 text-slate-900 font-semibold"
                    key={index + 1}
                  >{`${index + 1}. ${topic}`}</p>
                )
            )
        )}
      </div>
    </div>
  );
};

export default Query;
