'use client';

import { motion } from 'motion/react';
import { useEffect, useMemo, useState } from 'react';

interface TypingTextProps {
  text: string | string[];
  typingSpeed?: number;
  eraseSpeed?: number;
  pauseTime?: number;
  delay?: number;
  cursor?: boolean;
  className?: string;
  loop?: boolean;
}

export function TypingText({
  text,
  typingSpeed = 80,
  eraseSpeed = 40,
  pauseTime = 2500,
  delay = 0,
  cursor = true,
  className = '',
  loop = true,
}: TypingTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [hasStarted, setHasStarted] = useState(delay === 0);

  const textArray = useMemo(
    () => (Array.isArray(text) ? text : [text]),
    [text]
  );

  useEffect(() => {
    if (delay > 0 && !hasStarted) {
      const startDelay = setTimeout(() => setHasStarted(true), delay);
      return () => clearTimeout(startDelay);
    }
  }, [delay, hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let timeoutId: NodeJS.Timeout;
    const currentText = textArray[textIndex];

    if (!isDeleting && displayText === currentText) {
      if (loop || textIndex < textArray.length - 1) {
        timeoutId = setTimeout(() => setIsDeleting(true), pauseTime);
      }
    } else if (isDeleting && displayText === '') {
      timeoutId = setTimeout(() => {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % textArray.length);
      }, 400);
    } else {
      const nextSpeed = isDeleting ? eraseSpeed : typingSpeed;

      timeoutId = setTimeout(() => {
        setDisplayText(
          currentText.substring(0, displayText.length + (isDeleting ? -1 : 1))
        );
      }, nextSpeed);
    }

    return () => clearTimeout(timeoutId);
  }, [
    displayText,
    isDeleting,
    textIndex,
    textArray,
    typingSpeed,
    eraseSpeed,
    pauseTime,
    loop,
    hasStarted,
  ]);

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span>{displayText}</span>
      {cursor && (
        <motion.span
          className="bg-neon-cyan ml-0.5 inline-block h-[1em] w-[3px]"
          animate={{ opacity: [1, 1, 0, 0] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            times: [0, 0.5, 0.5, 1],
          }}
          aria-hidden="true"
        />
      )}
    </span>
  );
}
