import React from "react";
import styles from "../../components/MovieInfo.module.css";
import Image from "next/image";
export default function movieID({ currmov }) {
  return (
    <div className="col-span-10">
      <div className="relative ">
        <Image
          src={`https://image.tmdb.org/t/p/original${
            currmov ? currmov.backdrop_path : ""
          }`}
          alt="img"
          width={200}
          height={100}
          className={styles.movie__image}
        />

        <div className={styles.movie}>
          <div className="p-[2.5vw]">
            <div style={{ fontWeight: "900", fontSize: "3vw" }}>
              {currmov ? currmov.original_title : ""}
            </div>

            <div className="flex gap-10 text-[1.8vw]">
              <div className="flex items-center justify-center">
                {currmov ? currmov.runtime + " mins" : ""}
              </div>

              <div
                style={{ display: "flex", alignItems: "center", gap: "7px" }}
              >
                {currmov ? currmov.vote_average : ""}
                {/* <StarPurple500SharpIcon style={{ width: "3vw" }} /> */}
              </div>
            </div>

            <div className="text-[1.7vw]">
              {currmov ? "Release date: " + currmov.release_date : ""}
            </div>

            <div className="flex flex-wrap gap-7 my-2.5">
              {currmov && currmov.genres
                ? currmov.genres.map((genre) => (
                    <>
                      <span className="movie__genre" id={genre.id}>
                        {genre.name}
                      </span>
                    </>
                  ))
                : ""}
            </div>
          </div>
        </div>
      </div>

      <div className="w-[90%] h-[600px] my-0 mx-auto">
        <div className={styles.movie__detailRightBottom}>
          <p style={{ fontSize: "2vw", fontWeight: "600", margin: "20px 0px" }}>
            Synopsis :
          </p>
          <p style={{ fontSize: "1.6vw", margin: "5px" }}>
            {currmov ? currmov.overview : ""}
          </p>
        </div>

        <div className="my-10">
          <div style={{ fontSize: "2vw", fontWeight: "600" }}>
            Useful Links :{" "}
          </div>

          <div
            style={{
              display: "flex",
              gap: "10px",
              justifyContent: "center",
              margin: "25px 0px",
            }}
          >
            {currmov && currmov.homepage && (
              <button className="btn bg-slate-500 p-5 border rounded-md">
                <a
                  href={currmov.homepage}
                  target="_blank"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <span>Homepage</span>
                </a>
              </button>
            )}
            {currmov && currmov.imdb_id && (
              <button className="btn bg-slate-500 p-5 border rounded-md">
                <a
                  href={"https://www.imdb.com/title/" + currmov.imdb_id}
                  target="_blank"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <p>IMDb</p>
                </a>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const { movieID } = context.params;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieID}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
  );
  const data = await res.json();
  return {
    props: { currmov: data },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { movieID: "278" } },
      { params: { movieID: "238" } },
      { params: { movieID: "240" } },
    ],
    fallback: true,
  };
}
