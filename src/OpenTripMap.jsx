import React, { useState, useEffect } from 'react';
import useFetch from "react-fetch-hook";

  const OpenTripMapExample = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const apiKey = '5ae2e3f221c38a28845f05b6d4abedb7255e1841191e88000d07bd495ae2e3f221c38a28845f05b6d4abedb7255e1841191e88000d07bd49'; // Wpisz swój klucz API

  const apiUrl = `https://api.opentripmap.io/product?&apikey=${apiKey}`;

  const { fetchData } = useFetch();

  useEffect(() => {
    setIsLoading(true);
    fetchData(apiUrl)
      .then((response) => {
        setData(response);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, [apiUrl]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>OpenTripMap Products</h1>
      <ul>
        {data?.features?.map((product) => (
          <li key={product.properties.id}>{product.properties.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default OpenTripMapExample;