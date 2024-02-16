import { Flex } from "@chakra-ui/react";
import { usePlayGame } from "../hooks/usePlayGame";
import PlayWindow from "../components/PlayWindow";
import Login from "../components/Login";

const randomNumber = Math.floor(Math.random() * 3);

function HomePage() {
  const {
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
  } = usePlayGame(randomNumber);
  return (
    <Flex wrap="wrap" sx={{ justifyContent: "center", marginTop: "40px" }}>
      {!loginMode && (
        <Login handleOnChange={handleOnChange} handleOnClick={handleOnClick} />
      )}
      {loginMode && (
        <PlayWindow
          login={login}
          randomArray={randomArray}
          handleOnClickDiv={handleOnClickDiv}
          arrayWithRightAnswer={arrayWithRightAnswer}
          clickedKey={clickedKey}
          checkingMode={checkingMode}
          handleChecking={handleChecking}
        />
      )}
    </Flex>
  );
}

export default HomePage;
