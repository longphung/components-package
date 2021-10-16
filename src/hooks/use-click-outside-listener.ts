import { useEffect } from 'react';

/*
* Run handleOutsideClick if is the element does not contain the element that triggers the event
*/
const useOutsideClickListener = (handleOutsideClick: () => any, element: HTMLElement) => {
  useEffect(() => {
    const handleMousedown = ({ target }: { target: any }): void => {
      if (element && !element.contains(target)) {
        handleOutsideClick();
      }
    };
    document.addEventListener('mousedown', handleMousedown);
    return () => {
      document.removeEventListener('mousedown', handleMousedown);
    };
  }, [element]);
};

export default useOutsideClickListener;
