import Link from "next/link";
import Image from "next/image";

const Movie = ({ key, id, title, release_date, poster_path }) => {
    const imagePath = "https://image.tmdb.org/t/p/original";

    return (
        <div key={key}>
            <h1>{title}</h1>
            <p>{release_date}</p>
            <Link href={`/${id}`}>
                <Image src={imagePath + poster_path} width={800} height={800} alt={title} />
            </Link>
        </div>
    );
};

export default Movie;
