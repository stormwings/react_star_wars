import React, { useEffect, useState, useRef } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

// hook to define if the component its visible
const useCheckElementInViewport = () => {
  const $element: any = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    var observer = new IntersectionObserver(entries => {
      const { isIntersecting } = entries[0];
      if (isIntersecting) {
        setShow(true);
        // observer.disconnect(); // disabled for lazy load
      }
    });
    observer.observe($element.current);
  }, [$element]);

  return [show, setShow, $element];
};

export default function LoadingTrigger({ triggerAction }: any) {
  const [show, setShow, $element] = useCheckElementInViewport();

  useEffect(() => {
    if (show === true) {
      triggerAction();
      setShow(false);
    }
  });

  return (
    <div ref={$element}>
      <CircularProgress style={{ margin: '10px' }} />
    </div>
  );
}
