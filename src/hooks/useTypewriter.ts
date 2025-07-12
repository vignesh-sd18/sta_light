
import { useEffect, useRef, useState } from 'react';

interface TypewriterOptions {
  delay?: number;
  startDelay?: number;
  speed?: number;
  eraseDelay?: number;
  eraseSpeed?: number;
  loop?: boolean;
  pauseBetween?: number;
}

/**
 * A hook that adds a typewriter effect with multiple texts
 * @param texts Array of texts to type sequentially
 * @param options Configuration options for the typewriter effect
 * @returns The current text being displayed and a blinking cursor state
 */
export const useTypewriter = (texts: string[], options: TypewriterOptions = {}) => {
  const {
    delay = 70,
    startDelay = 500,
    speed = 1,
    eraseDelay = 1500,
    eraseSpeed = 40,
    loop = true,
    pauseBetween = 1500
  } = options;
  
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [isErasing, setIsErasing] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  
  // Track if component is mounted
  const isMounted = useRef(true);
  
  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      if (isMounted.current) {
        setShowCursor(prev => !prev);
      }
    }, 500);
    
    return () => {
      clearInterval(cursorInterval);
      isMounted.current = false;
    };
  }, []);
  
  useEffect(() => {
    if (!texts || texts.length === 0) return;
    
    let timeout: NodeJS.Timeout;
    
    // Start the typewriter after initial delay
    timeout = setTimeout(() => {
      setIsTyping(true);
    }, startDelay);
    
    return () => clearTimeout(timeout);
  }, [texts, startDelay]);
  
  // Main typewriter effect
  useEffect(() => {
    if (!texts || texts.length === 0) return;
    
    let timeout: NodeJS.Timeout;
    const currentText = texts[currentIndex];
    
    if (isTyping) {
      if (displayText.length < currentText.length) {
        // Type the next character
        timeout = setTimeout(() => {
          if (isMounted.current) {
            setDisplayText(currentText.substring(0, displayText.length + 1));
          }
        }, delay / speed);
      } else {
        // Finished typing current text
        setIsTyping(false);
        
        // Wait before erasing
        timeout = setTimeout(() => {
          if (isMounted.current) {
            setIsErasing(true);
          }
        }, eraseDelay);
      }
    } else if (isErasing) {
      if (displayText.length > 0) {
        // Erase one character
        timeout = setTimeout(() => {
          if (isMounted.current) {
            setDisplayText(displayText.substring(0, displayText.length - 1));
          }
        }, eraseSpeed / speed);
      } else {
        // Finished erasing
        setIsErasing(false);
        
        // Move to next text or loop back to first
        const nextIndex = (currentIndex + 1) % texts.length;
        if (nextIndex === 0 && !loop) {
          // If we're at the end and not looping, stop
          return;
        }
        
        // Wait before typing next text
        timeout = setTimeout(() => {
          if (isMounted.current) {
            setCurrentIndex(nextIndex);
            setIsTyping(true);
          }
        }, pauseBetween);
      }
    }
    
    return () => clearTimeout(timeout);
  }, [texts, currentIndex, displayText, isTyping, isErasing, delay, speed, eraseDelay, eraseSpeed, loop, pauseBetween]);
  
  return { text: displayText, showCursor, isTyping, isErasing };
};

export default useTypewriter;
