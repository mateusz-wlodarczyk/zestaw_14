import { Box, Button, Input } from "@chakra-ui/react";
import React, { ChangeEvent, MouseEventHandler } from "react";

export default function Login({
  handleOnChange,
  handleOnClick,
}: {
  handleOnChange: (e: ChangeEvent) => void;
  handleOnClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <Box>
      <form>
        <Input placeholder="write login" onChange={handleOnChange} />
        <Button type="submit" onClick={handleOnClick}>
          PLAY
        </Button>
      </form>
    </Box>
  );
}
