import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setIsLoading(false);
      setTours(tours);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return (
    <main>
      <section>
        <div className="title">
          <h2>our tours</h2>
          <div className="underline"></div>
        </div>
        <Tours tours={tours} />
      </section>
    </main>
  );
}

export default App;
