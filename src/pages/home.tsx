import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/home.css';
import '../style/layout.css';

const Home: React.FC = () => {
  return (
    <div className='home'>
      <NavLink to="/test">
        <div className='startBtn'>시작하기</div>
      </NavLink>
    </div>
  );
};

export default Home;
