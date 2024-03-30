const observer = new MutationObserver(() => {
  if (document.body) document.documentElement.style.filter = "grayscale(100%)";
});

observer.observe(document, {
  attributes: true,
  childList: true,
  subtree: true,
});
