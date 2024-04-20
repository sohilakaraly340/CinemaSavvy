import MovCard from "@/components/movCard/MovCard";
import React from "react";

export default function Popular({ movies }) {
  console.log(movies);
  return (
    <div className="col-span-10 px-11">
      {movies.results.map((mov) => (
        <MovCard key={mov.id} mov={mov} />
      ))}
    </div>
  );
}
export async function getServerSideProps() {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
  );
  const data = await res.json();
  return {
    props: { movies: data },
  };
}
