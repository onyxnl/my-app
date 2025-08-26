import React, { useEffect, useRef, useState } from 'react';
const Counter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const started = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const top = ref.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (!started.current && top < windowHeight) {
        started.current = true;
        animateCount(0, end, duration);
      }
    };

    const animateCount = (start, end, duration) => {
      let startTime = null;

      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const progressPercent = Math.min(progress / duration, 1);
        const current = Math.floor(progressPercent * (end - start) + start);
        setCount(current);
        if (progress < duration) {
          requestAnimationFrame(step);
        } else {
          setCount(end);
        }
      };

      requestAnimationFrame(step);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // run on mount in case it's already visible

    return () => window.removeEventListener('scroll', handleScroll);
  }, [end, duration]);


    return (
        <div>
            {/* <h2>Counter: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button> */}
            <div ref={ref} className="count">
                {count}
            </div>
        </div>
    );
}

export default Counter;
