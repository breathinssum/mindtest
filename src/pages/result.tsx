import React, { useEffect, useState } from 'react';
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

  const [isLoaded, setIsLoaded] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = backgroundImage;
    img.onload = () => {
      setIsLoaded(true);
    };
  }, [backgroundImage]);

  if (!isLoaded) {
    return <div className="result" style={{ height: '100vh', backgroundColor: '#fff' }} />;
  }

  return (
    <div className="result">
      <div
        className='result-container'
        style={{
          background: `url(${backgroundImage}) center / contain no-repeat`,
          width: `284px`,
          height: `600px`,
        }}
      ></div>

      <div className="overlay">
        <NavLink to="/">
          <div className="retry">다시하기</div>
        </NavLink>
        <div className="all" onClick={() => setShowPopup(true)}>전체 결과 보기</div>
      </div>

      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowPopup(false)}>닫기</button>
            <div className="popup-images">
              {resultImages.map((img, index) => (
                <img key={index} src={img} alt={`결과 ${index + 1}`} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Result;
