import React from "react";

interface InfinityScrollComponentsHandlerProps {
  AllComponents: Array<React.FC>;
  setAllComponents: React.Dispatch<React.SetStateAction<Array<React.FC>>>;
  Components: Array<React.FC>;
  setComponents: React.Dispatch<React.SetStateAction<Array<React.FC>>>;
  IsVisible: { component: string; id: string };
  setIsVisible: React.Dispatch<
    React.SetStateAction<{ component: string; id: string }>
  >;
}

const InfinityScrollComponentsHandler = ({
  AllComponents,
  setAllComponents,
  Components,
  setComponents,
  IsVisible,
  setIsVisible,
}: InfinityScrollComponentsHandlerProps) => {
  if (window.innerHeight + window.scrollY + 20 >= document.body.scrollHeight) {
    const newComponent = AllComponents && AllComponents.shift();
    newComponent &&
      setComponents((prevComponents) => [...prevComponents, newComponent]);
  }
  const isThere = Components.find((c) => c.name === IsVisible.id);

  const element = document.getElementById(IsVisible.id);
  isThere && element && setIsVisible({ ...IsVisible, component: "yes" });

  const scrollToElement = () => {
    isThere && element && element.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
  }

  isThere && element && setTimeout(scrollToElement, 200)

  if (IsVisible.component === "no" && !isThere) {
    const newComponent = AllComponents && AllComponents.shift();
    setAllComponents(AllComponents);
    console.log(AllComponents);
    newComponent &&
      setComponents((prevComponents) => [...prevComponents, newComponent]);
    setIsVisible({ ...IsVisible, component: "no" });
  }
};

export default InfinityScrollComponentsHandler;
