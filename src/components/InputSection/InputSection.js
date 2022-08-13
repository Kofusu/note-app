import { useState } from "react";

import { BlockButton } from "../Button/Button";
import { Input, Textarea } from "../Input/Input";
import styles from "./InputSection.module.css";

const InputSection = ({ onAdd }) => {
  const [formInput, setFormInput] = useState({
    title: "",
    body: "",
  });

  const changeHandler = (event) => {
    setFormInput((prevInput) => {
      if (event.target.name === 'title' && event.target.value.length > 50) {
        return {...prevInput}
      }
      return { ...prevInput, [event.target.name]: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    onAdd({
      id: +new Date(),
      title: formInput.title,
      body: formInput.body,
      archived: false,
      createdAt: new Date().toString(),
    });
    setFormInput({
      title: "",
      body: "",
    });
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <h1>Buat Catatan</h1>
      <Input
        onChange={changeHandler}
        name="title"
        label="Title"
        id="title"
        type="text"
        value={formInput.title}
        remainder={formInput.title.length}
      />
      <Textarea
        onChange={changeHandler}
        name="body"
        label="Body"
        id="body"
        type="textarea"
        value={formInput.body}
      />
      <BlockButton type="submit">Add Note</BlockButton>
    </form>
  );
};

export default InputSection;
