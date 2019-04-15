import { useRef, useState, useEffect } from "react";

const options = {
  root: null,
  rootMargin: "0px"
};

const onScreenHook = () => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  const setIntersectionObserver = useEffect(() => {
    console.log("es visible " + ref.current + " : " + visible);
    const observer = new window.IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    }, options);
    observer.observe(ref.current);

    return () => {
      observer.unobserve(ref.current);
    };
  });

  useEffect(() => {
    document.addEventListener("load", setIntersectionObserver);
    return () => {
      document.removeEventListener("load", setIntersectionObserver);
    };
  });

  return [ref, visible];
};

export default onScreenHook;
export { onScreenHook };
