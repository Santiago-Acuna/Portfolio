import React from "react";
import { TranslateText } from "../assets/translateText.tsx";
// import GlobalLanguage from "../GlobalLanguage/globalLanguage.tsx";

interface TitleProps{
  English:string, Spanish:string,
}


export const Title :React.FC<TitleProps> =({English, Spanish}) => {
  
  



  return(<div><TranslateText English={English} Spanish={Spanish}/></div>)
}