import React from "react";

interface InfinityScrollComponentsHandlerProps {
  AllComponents: Array<React.FC>;
  setAllComponents: React.Dispatch<React.SetStateAction<Array<React.FC>>>;
  setComponents: React.Dispatch<React.SetStateAction<Array<React.FC>>>;
  IsVisible: { component: string; id: string };
  setIsVisible: React.Dispatch<
    React.SetStateAction<{ component: string; id: string }>
  >;
}

const InfinityScrollComponentsHandler = async ({
  AllComponents,
  setAllComponents,
  setComponents,
  IsVisible,
  setIsVisible,
}: InfinityScrollComponentsHandlerProps) => {
  const scrollHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
  if (window.innerHeight + window.scrollY + 10 >= scrollHeight) {
    const newComponent = AllComponents && AllComponents.shift();
    newComponent &&
      setComponents((prevComponents) => [...prevComponents, newComponent]);
  }

  const element = document.getElementById(IsVisible.id);
  element && setIsVisible({ ...IsVisible, component: "yes" });
  const scrollToElement = () => {
    element &&
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
  };
  element && setTimeout(scrollToElement, 300);

  if (IsVisible.component === "no" && !element) {
    const newComponent = AllComponents && AllComponents.shift();
    setAllComponents(AllComponents);

    newComponent &&
      setComponents((prevComponents) => [...prevComponents, newComponent]);
  }
};

export default InfinityScrollComponentsHandler;
