import React from 'react';

const LogCard = ({ time, title }) => {
  return (
    <div>
      <div>
        <div>
          <h4>Readlist > {title}</h4>
        </div>
        <div>
          <h6>{time} mins ago</h6>
        </div>
      </div>
      <div>
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default LogCard;
