import { useCallback, useState } from "react";

export const useCreateForm = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const resetInputValue = useCallback(() => {
    setInputValue("");
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      onSubmit(inputValue);
      resetInputValue();
    },
    [inputValue, onSubmit, resetInputValue]
  );

  const onChangeInput = useCallback((event) => {
    setInputValue(event.target.value);
  }, []);

  return { inputValue, handleSubmit, resetInputValue, onChangeInput };
};
