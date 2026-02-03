// Utility to scroll to top when navigating between pages
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
};

// Hook version for use in components
export const useScrollToTop = () => {
  return scrollToTop;
};