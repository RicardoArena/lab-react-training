import { useState } from 'react';

import style from '../LikeButton/style.css';

export function LikeButton() {
  const colorStyle = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  const [conterValue, setInterval] = useState(0);

  return (
    <div>
      <div className="color-style">
        <button
          className={colorStyle[conterValue]}
          onClick={() => setInterval((preCounter) => ++preCounter)}
        >
          {conterValue}likes
        </button>
      </div>
    </div>
  );
}
