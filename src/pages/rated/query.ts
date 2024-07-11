export const fetchRatedMovies = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/guest_session/${localStorage.getItem(
      "guest_session_id"
    )}/rated/movies?language=en-US&page=1&sort_by=created_at.asc&api_key=${
      import.meta.env.VITE_API_KEY
    }`,
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTY4MDIxY2YzYzE4NmExYTUzMTg3MGY0ZTkxODhiYSIsIm5iZiI6MTcyMDM5NjM2OC4xNDgwOSwic3ViIjoiNjY1OTEzODFhMmNmYTVmYjRhNzRmM2I0Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.xDTIhQdCe0uXQoVbk5gR8pcNajLQxShwlQwpngY3lPk",
        accept: "application/json",
      },
    }
  );
  return res.json();
};

export const fetchRatedTvShows = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/guest_session/${localStorage.getItem(
      "guest_session_id"
    )}/rated/tv?language=en-US&page=1&sort_by=created_at.asc&api_key=${
      import.meta.env.VITE_API_KEY
    }`,
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTY4MDIxY2YzYzE4NmExYTUzMTg3MGY0ZTkxODhiYSIsIm5iZiI6MTcyMDM5NjM2OC4xNDgwOSwic3ViIjoiNjY1OTEzODFhMmNmYTVmYjRhNzRmM2I0Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.xDTIhQdCe0uXQoVbk5gR8pcNajLQxShwlQwpngY3lPk",
        accept: "application/json",
      },
    }
  );
  return res.json();
};
