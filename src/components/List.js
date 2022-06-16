import React from 'react';

const List = ({ results }) => {
  const renderedList = results.map((item) => {
    return (
      <div key={item.pageid} className='ui segment'>
        <h2>
          <a
            target='_blank'
            rel='noreferrer'
            href={'https://en.wikipedia.org?curid=' + item.pageid}
            className='header'
          >
            {item.title}
          </a>
        </h2>
        <p dangerouslySetInnerHTML={{ __html: item.snippet }}></p>
      </div>
    );
  });

  return renderedList;
};

export default List;
