import React from 'react';
import Lottie from 'react-lottie';

import defaultLoading from './loading.json';
import bb8 from './bb8.json';
import error_500 from './error-500.json';
import loading_gears from './loading-gears.json';
import error_404 from './not-found-404.json';

export default function Animation({ animation, style = {} }: any) {
  let switchAnimation;

  switch (animation) {
    case '404':
      switchAnimation = error_404;
      break;
    case '500':
      switchAnimation = error_500;
      break;
    case 'loading-gears':
      switchAnimation = loading_gears;
      break;
    case 'bb8':
      switchAnimation = bb8;
      break;
    default:
      switchAnimation = defaultLoading;
      break;
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: switchAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div style={style}>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
}
