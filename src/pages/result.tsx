import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import result0 from '../../public/img/008.png';
import result1 from '../../public/img/007.png';
import result2 from '../../public/img/006.png';
import result3 from '../../public/img/005.png';
import result4 from '../../public/img/004.png';
import result5 from '../../public/img/003.png';
import result6 from '../../public/img/002.png';
import result7 from '../../public/img/001.png';
import '../style/result.css';

const resultImages = [
  result0, result1, result2, result3,
  result4, result5, result6, result7,
];

const Result: React.FC = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const resultIndex = parseInt(params.get('result') || '0', 10);
  const backgroundImage = resultImages[resultIndex];

  return (
    <div className="result-container" style={{ background: `url(${backgroundImage}) center / contain no-repeat`, width: `500px`, height: `910px`, objectFit: `contain` }}>
      <div className="overlay">
        <NavLink to="/">
          <div className="retry">다시하기</div>
        </NavLink>
        <NavLink to="/result">
          <div className="all">전체 결과 보기</div>
        </NavLink>
      </div>
    </div>
  );
};

export default Result;
