import React from 'react';

import SmallDiv from './SmallDiv';
function Unhappy(props) {
  const handleDragStart = (e, itemId) => {
    e.dataTransfer.setData('text/plain', itemId);
  };

  const handleDragOver = e => {
    e.preventDefault();
  };

  const handleDrop = e => {
    e.preventDefault();
    const itemId = e.dataTransfer.getData('text/plain');
    props.onDrop(itemId, 'unhappy');
  };

  return (
    <div className="Unhappy" onDragOver={handleDragOver} onDrop={handleDrop}>
      {props.items.map(item => (
        <SmallDiv key={item.id} item={item} onDragStart={handleDragStart} />
      ))}
    </div>
  );
}

export default Unhappy;
