import  { useContext, } from "react";
import GlobalLanguage from "../GlobalLanguage/globalLanguage.tsx";
 interface TranslateTextProps{
  English:string,
  Spanish:string
 }

export const TranslateText:React.FC <TranslateTextProps>= ( {English, Spanish} )  => {
  const { Language } = useContext(GlobalLanguage)!;
  
  let text =""


console.log(English)
console.log(Spanish)
console.log(Language)
// Language === "English" ? 
Language === "English" ? text = English  : text = Spanish


return  <p>{text}</p>
}