interface ElementVisibilityResult {
  isElementVisible: boolean;
  elementId: string;
}

const isElementVisibleOnScroll = (
  elementId: string
): Promise<ElementVisibilityResult> => {
  return new Promise((resolve) => {
    const element = document.getElementById(elementId);

    if (!element) {
      resolve({
        isElementVisible: false,
        elementId,
      });
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const isVisible = entries[0].isIntersecting;
        observer.disconnect();
        resolve({
          isElementVisible: isVisible,
          elementId,
        });
      },
      {
        threshold: 1.0, // The entire element must be visible.
      }
    );

    element && observer.observe(element);
  });
};

export default isElementVisibleOnScroll;
