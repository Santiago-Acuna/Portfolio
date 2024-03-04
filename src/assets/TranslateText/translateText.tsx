import { useContext } from "react";
import {GlobalLanguageState} from "../GlobalStates/globalStates.tsx";
interface TranslateTextProps {
  English: string;
  Spanish: string;
}

const TranslateText: React.FC<TranslateTextProps> = ({ English, Spanish }): string=> {
  const { Language } = useContext(GlobalLanguageState)!;

  let text = "";

  // console.log(English);
  // console.log(Spanish);
  // console.log(Language);
  Language === "English" ? (text = English) : (text = Spanish);

  return text;
};

export default TranslateText;
