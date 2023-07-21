import React, { useEffect, useState } from 'react';

function FetchQuotes() {
  const [quotes, setQuotes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const displayQuote = async () => {
      try {
        const url = 'https://api.api-ninjas.com/v1/quotes?category=future';
        const response = await fetch(url, {
          headers: {
            'X-Api-Key': '8tD+pHh1hFfh1+cH9cqs+g==TQPocIaNW76IHiAR',
          },
        });
        if (!response) {
          throw new Error('Fail to load');
        }
        const quoteData = await response.json();
        const newQuote = quoteData[0].quote;
        setQuotes(newQuote);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    displayQuote();
  }, []);
  if (loading) {
    return (
      <div className="loadDiv">
        <div className="">Loading...</div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="loadDiv">
        <div className="loader">Error</div>
      </div>
    );
  }
  return (
    <div className="loadDiv">
      <div className="loader"><code>{quotes}</code></div>
    </div>
  );
}
export default FetchQuotes;
