import React from 'react';
import {COLORS} from '../data/constants'

const Avatar = ({name}) => (
  <div className="avatar" style={{backgroundColor: `#${COLORS[Math.floor(Math.random()*COLORS.length)]}`}}>
    {name.charAt(0).toLocaleUpperCase()}
  </div>
);

export default Avatar;
