import { useState } from "react";

type LoginFormState = {
  userId: string;
  password: string;
};

export default function useLogin() {
  const [form, setForm] = useState<LoginFormState>({
    userId: "",
    password: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return {
    form,
    onChange,
  };
}
