import { Box, Button, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { QuestionDataSingle } from '../utils/data';

export default function PlayWindow({
  login,
  randomArray,
  handleOnClickDiv,
  arrayWithRightAnswer,
  clickedKey,
  checkingMode,
  handleChecking,
}: {
  login: string;
  randomArray: QuestionDataSingle;
  handleOnClickDiv: (key: string) => void;
  arrayWithRightAnswer: string[];
  clickedKey: string[];
  checkingMode: boolean;
  handleChecking: () => void;
}) {
  console.log(randomArray);

  return (
    <Box>
      <Text>{login}, let's play a game</Text>
      <Box>
        <Text>{randomArray !== undefined && randomArray.question}:</Text>
        <Flex wrap='wrap' sx={{ border: '1px solid black', p: '5px' }}>
          {randomArray !== undefined &&
            randomArray.all_words.map((el) => (
              <Box
                onClick={() => handleOnClickDiv(el)}
                sx={{
                  w: '75px',
                  h: '35px',
                  background: `
              ${
                arrayWithRightAnswer.filter((elUnique) => el === elUnique).length > 0
                  ? 'green'
                  : clickedKey.filter((elClicked) => el === elClicked).length > 0 && checkingMode
                    ? 'red'
                    : ''
              }`,
                }}
                key={el}
              >
                {el}
              </Box>
            ))}
        </Flex>
      </Box>
      <Button onClick={handleChecking}>check answer</Button>
      {checkingMode && <Text>your score: {arrayWithRightAnswer.length}</Text>}
    </Box>
  );
}
