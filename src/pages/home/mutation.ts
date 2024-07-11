export const rateMovie = async (movieId: number, rating: number) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/rating?guest_session_id=${localStorage.getItem(
      "guest_session_id"
    )}&api_key=${import.meta.env.VITE_API_KEY}`,
    {
      method: "POST",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTY4MDIxY2YzYzE4NmExYTUzMTg3MGY0ZTkxODhiYSIsIm5iZiI6MTcyMDM5NjM2OC4xNDgwOSwic3ViIjoiNjY1OTEzODFhMmNmYTVmYjRhNzRmM2I0Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.xDTIhQdCe0uXQoVbk5gR8pcNajLQxShwlQwpngY3lPk",
        accept: "application/json",
        "content-type": "application/json;charset=utf-8",
      },
      body: `{'value': ${rating}}`,
    }
  );
  console.log(res.json);
  return res.json();
};

export const rateTvShow = async (tvShowId: number, rating: number) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${tvShowId}/rating?guest_session_id=${localStorage.getItem(
      "guest_session_id"
    )}&api_key=${import.meta.env.VITE_API_KEY}`,
    {
      method: "POST",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTY4MDIxY2YzYzE4NmExYTUzMTg3MGY0ZTkxODhiYSIsIm5iZiI6MTcyMDM5NjM2OC4xNDgwOSwic3ViIjoiNjY1OTEzODFhMmNmYTVmYjRhNzRmM2I0Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.xDTIhQdCe0uXQoVbk5gR8pcNajLQxShwlQwpngY3lPk",
        accept: "application/json",
        "content-type": "application/json;charset=utf-8",
      },
      body: `{'value': ${rating}}`,
    }
  );
  console.log(res.json);
  return res.json();
};
