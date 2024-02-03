// Code sourced from https://blog.logrocket.com/3-ways-implement-typing-animation-react/

import React, { useState, useEffect } from 'react';

function Typewriter({ text, delay }) {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
  
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  // Typing logic goes here

  return <span>{currentText}</span>;
};

export default Typewriter;