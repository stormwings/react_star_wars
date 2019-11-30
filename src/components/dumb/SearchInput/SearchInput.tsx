import React from "react";
import TextField from "@material-ui/core/TextField";

export default function SearchInput(props: any) {
  const { inputAction, inputRef, handleSubmit } = props;

  return (
    <form
      style={{ backgroundColor: "white", height: "8vh" }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(inputAction)}
    >
      <TextField
        inputRef={inputRef}
        name="search"
        id="standard-full-width"
        label="Search Character"
        style={{ margin: 8, width: "97%" }}
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
