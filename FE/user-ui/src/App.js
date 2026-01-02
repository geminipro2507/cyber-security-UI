import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./app/Router";

function App() {
  useEffect(() => {
    // Khởi tạo WOW.js cho animations
    if (window.WOW) {
      new window.WOW().init();
    }

    // Khởi tạo Counter Up cho numbers
    if (window.jQuery && window.jQuery.fn.counterUp) {
      window.jQuery('.counter').counterUp({
        delay: 10,
        time: 1000
      });
    }

    // Khởi tạo Nice Select nếu cần
    if (window.jQuery && window.jQuery.fn.niceSelect) {
      window.jQuery('select').niceSelect();
    }

    // Smooth scroll cho navigation links
    const pageScrollLinks = document.querySelectorAll('.page-scroll');
    pageScrollLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }, []);

  return <RouterProvider router={routes} />
}

export default App;
