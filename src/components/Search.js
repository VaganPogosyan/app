import React, { useState, useEffect } from 'react';
import axios from 'axios';
import List from './List';

const Search = () => {
  const [value, setvalue] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    let timerId = null;
    if (value) {
      timerId = setTimeout(async () => {
        const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
          params: {
            action: 'query',
            list: 'search',
            origin: '*',
            format: 'json',
            srsearch: value,
          },
        });

        setResults(data.query.search);
      }, 1000);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [value]);

  return (
    <>
      <form className='ui form'>
        <input
          placeholder='Search Wikipedia...'
          type='text'
          onChange={(e) => setvalue(e.target.value)}
        ></input>
      </form>

      <List results={results} />
    </>
  );
};

export default Search;
