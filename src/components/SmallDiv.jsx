import React from 'react';

function SmallDiv(props) {
  const handleDragStart = e => {
    props.onDragStart(e, props.item.id);
  };

  const { name, picture, isHappy, isUnhappy } = props.item;

  return (
    <div
      className={`SmallDiv ${isHappy ? 'happy' : ''} ${isUnhappy ? 'unhappy' : ''}`}
      draggable="true"
      onDragStart={handleDragStart}
    >
      <img src={picture} alt={name} />
      <p>{name}</p>
    </div>
  );
}

export default SmallDiv;
