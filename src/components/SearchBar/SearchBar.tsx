import React, { useState, ChangeEvent, FormEvent } from "react";
import styles from "./SearchBar.module.css";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

function SearchBar({ onSubmit }: SearchBarProps) {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value.trim()) return;
    onSubmit(value.trim());
    setValue("");
  };

  return (
    <header className={styles.header}>
      {" "}
      {}
      <form onSubmit={handleSubmit} className={styles.form}>
        {" "}
        {}
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Search images"
          className={styles.input}
        ></input>{" "}
        {}
        <button type="submit" className={styles.button}>
          {" "}
          {}
          Search
        </button>
      </form>
    </header>
  );
}

export default SearchBar;
