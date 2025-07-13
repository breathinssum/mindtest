import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/test.css';

const questions = [
  '커피 사면 3분만에 다 마시고 얼음까지 씹어먹는다.',
  '게임 할때 서폿터 절대 안간다.',
  '다이어트 진지하게 해본 적 있다. (벌크업 아님)',
  '엄마가 사준 스킨 크림 바른다.',
  '지금 프로필 사진 본인 사진이다. (혹은 한 적 있다)',
  '외출 준비 하면서 선크림 바른다.',
  '오락실 가면 무조건 펀치 기계 해야된다.',
  '옷은 세벌이면 충~분하다.',
  '카톡 읽씹 당하면 좀 우울하다.',
  '싸운 다음에 생각할 시간이 필요하다.',
  '카카오톡 이모티콘 돈주고 산다.',
  '웹툰 장르는 무협이나 액션이 좋다.',
];

const options1 = [
  '당연한거 아님?', '서폿 노잼', '살을 뺀다고?', '엄마 사랑해요.', '엥?', '겠냐?',
  '9999점을 위해', '회사용, 잠옷, 친구용', '뭐?', '3분이면 됨', '이모티콘을 씀?', '당근',
];

const options2 = [
  '엥?', '그걸 왜 안해?', '그럼 안빼냐?', '내 피부타입은 내가 알아', '웅!', '웅!',
  '그냥 지나치자', '뭐?', '가끔 그래...', '최소 하루?', '나는 쓰거든?', '로맨스 좋아',
];

const getResultIndex = (score: number): Promise<number> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (score <= 14) resolve(0);
      else if (score <= 17) resolve(1);
      else if (score <= 20) resolve(2);
      else if (score <= 23) resolve(3);
      else if (score <= 26) resolve(4);
      else if (score <= 29) resolve(5);
      else if (score <= 32) resolve(6);
      else resolve(7);
    }, 1000);
  });
};


const Test: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  const handleClick = async (selectedOption: number) => {
    const addedScore = selectedOption === 1 ? 3 : 1;
    const newScore = score + addedScore;
    setScore(newScore);

    if (index < questions.length - 1) {
      setIndex(index + 1);
    } else {
      const resultIndex = await getResultIndex(newScore);
      navigate(`/result?result=${resultIndex}`);
    }
  };


  return (
    <div className='test'>
      <div className='question'>{questions[index]}</div>
      <div className='select'>
        <div className='option1' onClick={() => handleClick(1)}>{options1[index]}</div>
        <div className='option2' onClick={() => handleClick(2)}>{options2[index]}</div>

      </div>
    </div>
  );
};

export default Test;
