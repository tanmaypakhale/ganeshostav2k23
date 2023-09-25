import * as React from 'react';
import { styled } from "@mui/material";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import ArticleIcon from "@mui/icons-material/Article";


const Wrapper = styled('div')({
    width: '100%',
    justifyContent: 'center',
    display: 'flex',
    marginTop: '20px',
})


const ButtonIcons = ({
  handleSubmitAndSend,
  handleClear,
  handleGenerateReciept,
}) => {
  return (
    <Wrapper>
      <Stack direction="row" spacing={2}>
        <Button
          variant="outlined"
          startIcon={<DeleteIcon />}
          onClick={handleClear}
        >
          Clear
        </Button>
        <Button
          variant="contained"
          endIcon={<ArticleIcon />}
          onClick={handleGenerateReciept}
        >
          Generate E-reciept
        </Button>
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          onClick={handleSubmitAndSend}
        >
          Submit & Send Mail
        </Button>
      </Stack>
    </Wrapper>
  );
};

export default ButtonIcons;
