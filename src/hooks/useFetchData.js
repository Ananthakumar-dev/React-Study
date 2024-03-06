import { useEffect, useState } from "react";

export default function UseFetchData({ url, options = {} }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (!url) return;

  async function fetchData() {
    try {
      setLoading(true);
      const response = await fetch(url, options);
      if (!response.ok) throw new Error(response.statusText);

      const resData = await response.json();
      setData(resData);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading, error };
}
