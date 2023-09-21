interface ElementVisibilityResult {
  isElementVisible: boolean;
}

const isElementVisibleOnScroll = (elementId: string): ElementVisibilityResult => {
  const element = document.getElementById(elementId);

  if (!element) {
    return {
      isElementVisible: false,
    };
  }

  const observer = new IntersectionObserver((entries) => {
    const isVisible = entries[0].isIntersecting;
    observer.disconnect();
    return isVisible;
  });

  observer.observe(element);

  return {
    isElementVisible: observer.takeRecords()[0]?.isIntersecting || false,
  };
};

export default isElementVisibleOnScroll