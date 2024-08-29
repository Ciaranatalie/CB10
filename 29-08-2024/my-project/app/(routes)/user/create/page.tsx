"use client";

import { FormEvent, useState, ChangeEvent, useEffect } from "react";

function CreatePage() {
  const [input, setInput] = useState<string>("");

  const inputValidation = input.length < 2;

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInput(e.target.value);
  };

  useEffect(() => {
    console.log("input:", input);
  }, [input]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="border-4 border-slate-500"
          type="text"
          onChange={handleChange}
          value={input}
          placeholder="insert data"
        />

        <input type="submit" />
      </form>
    </div>
  );
}

export default CreatePage;