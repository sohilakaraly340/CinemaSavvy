// Import CSS file
import Image from "next/image";
import styles from "./MovCard.module.css"; // Import CSS Module
import Link from "next/link"; // Import Link from Next.js to handle routing

export default function MovCard({ mov }) {
  return (
    <div className={styles.cards}>
      <Link href={`/home/${mov.id}`}>
        <div className={styles.cards__img}>
          <Image
            src={`https://image.tmdb.org/t/p/original${
              mov ? mov.poster_path : ""
            }`}
            alt="img"
            width={200}
            height={200}
          />
        </div>
        <div className={styles.cards__overlay}>
          <div className={styles.card__title}>
            {mov ? mov.original_title : ""}
          </div>
          <div className={styles.card__runtime}>
            {mov ? mov.release_date : ""}
            <span className={styles.card__rating}>
              {mov ? mov.vote_average : ""}
            </span>
          </div>
          <div className={styles.card__description}>
            {mov ? mov.overview : ""}
          </div>
        </div>
      </Link>
    </div>
  );
}
