import Image from "next/image";
import Link from "next/link";

export default async function MovieDetail({ params }) {
    const { movie } = params;
    const imagePath = "https://image.tmdb.org/t/p/original";
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`);
    const res = await data.json();

    return (
        <div>
            <div>
                <h2 className="text-2xl">{res.title}</h2>
                <h2 className="text-lg">{res.release_date}</h2>
                <h2>Runtime: {res.runtime} minutes</h2>
                <h2 className="bg-green-600 inline-block my-2 py-2 px-4 rounded-md text-sm">{res.status}</h2>
                <Link href={res.homepage} target="_blank">
                    <Image className="my-12 w-full" alt={res.title} src={imagePath + res.backdrop_path} width={600} height={600} priority />
                </Link>
                <p>{res.overview}</p>
            </div>
        </div>
    );
}
