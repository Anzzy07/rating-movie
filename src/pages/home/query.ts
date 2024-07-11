export const fetchMovies = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTY4MDIxY2YzYzE4NmExYTUzMTg3MGY0ZTkxODhiYSIsIm5iZiI6MTcyMDM5NjM2OC4xNDgwOSwic3ViIjoiNjY1OTEzODFhMmNmYTVmYjRhNzRmM2I0Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.xDTIhQdCe0uXQoVbk5gR8pcNajLQxShwlQwpngY3lPk",
      },
    }
  );
  console.log(res.json);
  return res.json();
};

export const fetchTvShows = async () => {
  const res = await fetch(
    "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTY4MDIxY2YzYzE4NmExYTUzMTg3MGY0ZTkxODhiYSIsIm5iZiI6MTcyMDM5NjM2OC4xNDgwOSwic3ViIjoiNjY1OTEzODFhMmNmYTVmYjRhNzRmM2I0Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.xDTIhQdCe0uXQoVbk5gR8pcNajLQxShwlQwpngY3lPk",
      },
    }
  );
  console.log(res.json);
  return res.json();
};
