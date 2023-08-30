import { useContext } from "react";
import GlobalLanguage from "../../GlobalLanguage/globalLanguage.js";
interface TranslateTextProps {
  English: string;
  Spanish: string;
}

const TranslateText: React.FC<TranslateTextProps> = ({ English, Spanish }) => {
  const { Language } = useContext(GlobalLanguage)!;

  let text = "";

  console.log(English);
  console.log(Spanish);
  console.log(Language);
  Language === "English" ? (text = English) : (text = Spanish);

  return text;
};

export default TranslateText;
