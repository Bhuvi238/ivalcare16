import React, { useEffect, useState } from 'react';

const words = [
   " Welcome to our website, dear women! ",
   " We are thrilled to have you here. ",
   " Our platform is dedicated to empowering and ",
   " supporting women in all aspects of life. ",
   " We hope you will find valuable resources, inspiration,", 
   " and a community of like-minded individuals",
   " who share your passions and aspirations.  ",
   " Thank you for joining us on this journey, and ",
   " we look forward to connecting with you!"
];

const WordFlick = () => {
  const [part, setPart] = useState('');
  const [i, setI] = useState(0);
  const [offset, setOffset] = useState(0);
  const [forwards, setForwards] = useState(true);
  const [skipCount, setSkipCount] = useState(0);
  const skipDelay = 15;
  const speed = 70;

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
        if (offset >= words[i].length) {
          setSkipCount(skipCount + 1);
          if (skipCount === skipDelay) {
            setForwards(false);
            setSkipCount(0);
          }
        }
      } else {
        if (offset === 0) {
          setForwards(true);
          setI(i + 1);
          setOffset(0);
          if (i >= words.length) {
            setI(0);
          }
        }
      }
      setPart(words[i].substr(0, offset));
      if (skipCount === 0) {
        if (forwards) {
          setOffset(offset + 1);
        } else {
          setOffset(offset - 1);
        }
      }
    }, speed);
    return () => clearInterval(interval);
  }, [offset, forwards, skipCount]);

  return <span className="word">{part}</span>;
};

export default WordFlick;
