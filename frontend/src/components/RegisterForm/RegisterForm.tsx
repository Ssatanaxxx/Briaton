import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../api/queryClient";
import { FormEventHandler, memo, useState } from "react";
import Button from "../UI-Kit/AuthButton/AuthButton";
import { UIFormField } from "../UI-Kit/UIFormField/UIFormField";
import {
  registerUser,
  RegisterSchema,
  type RegisterData,
} from "../../api/User";
import "./RegisterForm.css";

export const RegisterForm = memo(() => {
  const [formData, setFormData] = useState<RegisterData>({
    fullName: "",
    phone: "",
    address: "",
  });

  const [errors, setErrors] = useState<Partial<RegisterData>>({});

  const registerMutation = useMutation({
    mutationFn: () => registerUser(formData),
    onSuccess: (user) => {
      queryClient.setQueryData(["user", "current"], user);
    },
    onError: (error: Error) => {
      setErrors({ phone: error.message });
    },
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const result = RegisterSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<RegisterData> = {};
      result.error.errors.forEach((err: any) => {
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
      <UIFormField label="ФИО" errorMessage={errors.fullName} htmlFor="fullName">
        <input
          id="fullName"
          name="fullName"
          type="text"
          value={formData.fullName}
          onChange={handleChange}
          disabled={registerMutation.isPending}
        />
      </UIFormField>

      <UIFormField label="Телефон" errorMessage={errors.phone} htmlFor="phone">
        <input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          disabled={registerMutation.isPending}
        />
      </UIFormField>

      <UIFormField label="Адрес" errorMessage={errors.address} htmlFor="address">
        <input
          id="address"
          name="address"
          type="text"
          value={formData.address}
          onChange={handleChange}
          disabled={registerMutation.isPending}
        />
      </UIFormField>

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
