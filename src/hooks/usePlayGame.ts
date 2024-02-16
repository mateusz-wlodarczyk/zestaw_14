import {
  ChangeEvent,
  ChangeEventHandler,
  MouseEvent,
  MouseEventHandler,
  useState,
} from "react";
import { QuestionDataSingle, questionData } from "../utils/data";

export const usePlayGame = (randomNumber: number) => {
  const [login, setLogin] = useState("");
  const [loginMode, setLoginMode] = useState(false);
  const [checkingMode, setCheckingMode] = useState(false);
  const [clickedKey, setClickedKey] = useState<string[]>([]);
  const [arrayWithRightAnswer, setArrayWithRightAnswer] = useState<string[]>(
    []
  );
  const [randomArray, setRandomArray] = useState<QuestionDataSingle>(
    questionData[randomNumber]
  );

  const handleOnChange: ChangeEventHandler = (
    e: ChangeEvent<HTMLSelectElement>
  ) => {
    setLogin(e.currentTarget.value);
  };

  const handleOnClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();

    if (login.length > 3) {
      setLoginMode(true);
    }
  };
  const handleOnClickDiv = (key: string) => {
    if (!checkingMode) {
      setClickedKey([...clickedKey, key]);
    }
  };

  const handleChecking = () => {
    const clickedKeyUnique = [...new Set(clickedKey)];

    const newArrayForChecking: string[] = clickedKeyUnique.reduce(
      (acc: string[], elClicked: string) => {
        if (randomArray.good_words.includes(elClicked)) {
          return [...acc, elClicked];
        }
        return acc;
      },
      []
    );

    setArrayWithRightAnswer(newArrayForChecking);
    setCheckingMode(true);
  };
  return {
    login,
    loginMode,
    checkingMode,
    randomArray,
    arrayWithRightAnswer,
    clickedKey,
    handleOnChange,
    handleOnClick,
    handleOnClickDiv,
    handleChecking,
  };
};
