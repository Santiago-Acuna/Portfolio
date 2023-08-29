import { useContext } from "react";
import GlobalLanguage from "../../GlobalLanguage/globalLanguage.js";
interface TranslateTextProps {
  English: string;
  Spanish: string;
}

export const TranslateText: React.FC<TranslateTextProps> = ({
  English,
  Spanish,
}) => {
  const { Language } = useContext(GlobalLanguage)!;

  let text = "";

  console.log(English);
  console.log(Spanish);
  console.log(Language);
  Language === "English" ? (text = English) : (text = Spanish);

  return text;
};
