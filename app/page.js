import Movie from "./Movie";

export default async function Home() {
    const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`);
    const res = await data.json();

    return (
        <main>
            <h1 className="text-4xl text-center mb-16">Popular Movie 2023</h1>
            <div className="grid gap-16 grid-cols-fluid">
                {res.results.map((movie) => (
                    <Movie id={movie.id} key={movie.id} title={movie.title} release_date={movie.release_date} poster_path={movie.poster_path} />
                ))}
            </div>
        </main>
    );
}
