// Preloader.js
import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const Preloader = () => {
  const animationContainer = useRef(null);
  useEffect(() => {
    // Load the Lottie animation
    const animation = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../animations/preload.json'), // Use the updated relative path here
    });
    return () => {
      animation.destroy();
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        ref={animationContainer}
        style={{ width: '300px', height: '300px' }}
      ></div>
    </div>
  );
};

export default Preloader;
