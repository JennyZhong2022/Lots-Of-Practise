export const fetchRandomUser = async () => {
  const response = await fetch("https://randomuser.me/api/");
  if (!response.ok) {
    throw new Error("Some complicated error messge");
    // do some logging here to console or file
  }
  const data = await response.json();
  return data;
};
