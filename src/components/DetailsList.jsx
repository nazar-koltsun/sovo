import React from 'react';

const DetailsList = ({ items, className }) => {
  return (
    <ul className={`${className} space-y-2.5`}>
      {items.map((item, index) => (
        <li key={index}>
          <span className="font-medium text-[var(--arsenic)]">
            {item.title}
          </span>
          <span className="text-[var(--electric-blue)]"> : {item.value}</span>
        </li>
      ))}
    </ul>
  );
};

export default DetailsList;
