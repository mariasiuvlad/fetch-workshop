import { useEffect, useState } from "react";

const URL = "https://www.reddit.com/r/AmItheAsshole.json";

const fetchArticles = async () => {
  console.log("[start fetching articles]");
  const response = await fetch(URL);
  console.log("[finished fetching articles]");
  const responseBody = await response.json();
  return responseBody;
};

export const useArticles = () => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchArticles()
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return { data, error, loading };
};
