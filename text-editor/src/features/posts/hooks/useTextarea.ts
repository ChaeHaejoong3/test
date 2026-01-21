import React, { useState } from "react";

export default function useTextarea(initialValue: string = "") {
  const [value, setValue] = useState(initialValue);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const bind: React.TextareaHTMLAttributes<HTMLTextAreaElement> = {
    value,
    onChange,
  };

  return { bind, value, setValue };
}
