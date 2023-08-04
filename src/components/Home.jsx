import React, { useState, useEffect } from "react";
import { getCategory } from "../Apiservice";
import JokeDisplay from "./JokeDisplay.jsx";
import Loader from "./Loader/Loader";

function Home() {
  const [category, setCategory] = useState([]);
  const [joke, setJoke] = useState("");
  const [showJoke, setShowJoke] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchCategory = async () => {
    try {
      const response = await getCategory();
      setLoading(false);
      setCategory(response);
    } catch (err) {
      console.log("Error fetching category:", err);
    }
  };

  const fetchRandomJoke = async (category) => {
    try {
      const url = category
        ? `https://api.chucknorris.io/jokes/random?category=${category}`
        : "https://api.chucknorris.io/jokes/random";
      const response = await fetch(url);
      const data = await response.json();
      return data.value;
    } catch (error) {
      console.error("Error fetching joke:", error);
      return "";
    }
  };
useEffect(() => {
  setTimeout(()=>{
    fetchCategory();
  },1000)
}, [])

  const handleJokeClick = async (category) => {
    const joke = await fetchRandomJoke(category);
    setJoke(joke);
    setShowJoke(true);
    setCurrentCategory(category);
  };

  const handleCloseJoke = () => {
    setShowJoke(false);
  };

  const handleNextJoke = async () => {
    const joke = await fetchRandomJoke();
    setJoke(joke);
  };

  if (loading){
    return(
      <main>
        <Loader/>
      </main>
    )
  }

  return (
    <div className="h-fit flex flex-col items-center justify-center relative">
      <div className="animate-bounce">
        <h2 className="text-green-500 text-4xl font-bold text-center">
          Chuck Norris
        </h2>
      </div>
      <div className="mt-8">
        <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {category.map((category, i) => (
            <button
              key={i}
              className="bg-white flex flex-col items-center justify-center rounded-md w-16 h-4 p-4 md:w-60 md:h-40 hover:scale-105 ease-in-out duration-300"
              onClick={() => handleJokeClick(category)}
            >
              <span className="capitalize text-base md:text-2xl font-bold text-blue-950">
                {category}
              </span>
              <p className="text-sm text-blue-900 hidden md:block">
                Unlimited jokes on {category}
              </p>
            </button>
          ))}
        </div>
      </div>
      {showJoke && (
        <div className="absolute md:top-56 top-72 lg:w-1/2 md:w-1/2">
          <JokeDisplay
            data={joke}
            datacatagory={currentCategory}
            onClose={handleCloseJoke}
            onNext={handleNextJoke}
          />
        </div>
      )}
    </div>
  );
}

export default Home;
