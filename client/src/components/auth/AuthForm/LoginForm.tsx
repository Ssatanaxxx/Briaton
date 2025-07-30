import { FormField } from "./FormField";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../api/User";
import { queryClient } from "../../api/queryClient";
import { FormEventHandler, memo, useState } from "react";
import Button from "./Button";

export const LoginForm = memo(() => {
    const [formData, setFormData] = useState({
        email: "",
        name: "",
        phone: "",
        delivery: ""
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitted, setIsSubmitted] = useState(false); // Новое состояние

    const validate = (): boolean => {
        const newErrors: Record<string, string> = {};

        if (!formData.name.trim()) newErrors.name = "Обязательное поле";
        if (!formData.email.includes('@')) newErrors.email = "Некорректный email";
        if (isNaN(Number(formData.phone))) newErrors.phone = "Должно быть числом";
        if (!formData.delivery.trim()) newErrors.delivery = "Обязательное поле";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const loginMutation = useMutation({
        mutationFn: () => login(
            formData.name,
            formData.email,
            Number(formData.phone),
            formData.delivery
        ),
        onSuccess() {
            queryClient.invalidateQueries({ queryKey: ["users", "me"] });
        }
    });

    const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        setIsSubmitted(true); // Активируем отображение ошибок
        if (validate()) {
            loginMutation.mutate();
        }
    };

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <FormField
                label="Имя пользователя"
                errorMessage={isSubmitted ? errors.name : ""} // Показываем только после отправки
                htmlFor="name">
                <input
                    id="name"
                    name="name"
                    onChange={handleChange}
                    value={formData.name}
                    type="text"
                    required
                />
            </FormField>

            {/* Аналогично для остальных полей */}
            <FormField
                label="Почта"
                errorMessage={isSubmitted ? errors.email : ""}
                htmlFor="email">
                <input
                    id="email"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                    type="email"
                    required
                />
            </FormField>

            <Button
                type="submit"
                title="Войти"
                isLoading={loginMutation.isPending}
            >
                Войти
            </Button>
        </form>
    );
});