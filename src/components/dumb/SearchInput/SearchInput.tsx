import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function SearchInput(props: any) {
  const { inputAction, inputRef, handleSubmit } = props;

  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit(inputAction)}>
      <TextField
        inputRef={inputRef}
        name="search"
        id="standard-full-width"
        label="Search Character"
        style={{ margin: 8 }}
        placeholder="Obi-Wan Kenobi"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true
        }}
      />
    </form>
  );
}
