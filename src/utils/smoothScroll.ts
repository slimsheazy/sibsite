export function smoothScrollTo(elementId: string) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}

export function smoothScrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
