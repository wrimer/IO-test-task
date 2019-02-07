import React from 'react';
import {COLORS} from '../data/constants'

const Avatar = ({name, views}) => (
  <div className="avatar" style={{backgroundColor: `#${COLORS[views % COLORS.length]}`}}>
    {name.charAt(0).toLocaleUpperCase()}
  </div>
);

export default Avatar;
