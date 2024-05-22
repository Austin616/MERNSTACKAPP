import { useEffect, useState } from "react";
import Background from "./Background";
import Navbar from "./Navbar";
import Hero from "./Hero";

const Home = () => {
  let heroData = [
    { text1: "Unmatched", text2: "quality" },
    { text1: "Innovate,", text2: "create" },
    { text1: "Follow", text2: "your dreams" },
  ];

  const [heroCount, setHeroCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((count) => {
        return count === 2 ? 0 : count + 1;
      });
    }, 5000);
  }, []);
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </div>
  );
};

export default Home;
