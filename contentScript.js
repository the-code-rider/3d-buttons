(() => {
  const selector =
    'button:not(.no-3d),' +
    '[role="button"]:not(.no-3d),' +
    'a[href]:not(.no-3d),' +
    'input[type="button"]:not(.no-3d),' +
    'input[type="submit"]:not(.no-3d),' +
    'input[type="reset"]:not(.no-3d)';

  /** Give a node (and any matching descendants) the .three-d class */
  const upgrade = (node) => {
    if (node.matches && node.matches(selector)) {
      node.classList.add('three-d');
    }
    if (node.querySelectorAll) {
      node.querySelectorAll(selector).forEach((el) => el.classList.add('three-d'));
    }
  };

  /* Initial pass */
  upgrade(document.documentElement);

  /* Future additions: MutationObserver keeps new content covered */
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((m) =>
      m.addedNodes.forEach((node) => upgrade(node))
    );
  });

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
})();

