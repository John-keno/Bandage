import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    const handleScrollUp = () => {
      window.scrollTo(0, 0)
    };
    window.addEventListener("load", handleScrollUp);
    window.addEventListener("popstate", handleScrollUp);
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

export default ScrollToTop;
