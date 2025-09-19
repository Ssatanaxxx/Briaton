import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../api/queryClient";
import { FormEventHandler, memo, useState } from "react";
import Button from "./Button";
import { FormField } from "./FormField";
import {
  registerUser,
  RegisterSchema,
  type RegisterData,
} from "../../api/User";

import "./Auth.css"


export const RegisterForm = memo(() => {
  const [formData, setFormData] = useState<RegisterData>({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<Partial<RegisterData>>({});

  const registerMutation = useMutation({
    mutationFn: () => registerUser(formData),
    onSuccess: (user) => {
      queryClient.setQueryData(["user", "current"], user);
    },
    onError: (error: Error) => {
      setErrors({ email: error.message }); 
    },
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const result = RegisterSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<RegisterData> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof RegisterData] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    registerMutation.mutate();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof RegisterData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <FormField
        label="Имя пользователя"
        errorMessage={errors.username}
        htmlFor="username"
      >
        <input
          id="username"
          name="username"
          type="text"
          value={formData.username}
          onChange={handleChange}
          disabled={registerMutation.isPending}
        />
      </FormField>

      <Button
        type="submit"
        title="Зарегистрироваться"
        isLoading={registerMutation.isPending}
      >
        Зарегистрироваться
      </Button>
    </form>
  );
});
