const useGenre = (selectedgenres) => {
  if (selectedgenres.length < 1) return " ";
  const genreId = selectedgenres.map((g) => g.id);
  return genreId.reduce((acc, curr) => acc + "," + curr);
};

export default useGenre;
