import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../api/queryClient";
import { FormEventHandler, memo, useState } from "react";
import Button from "./Button";
import { FormField } from "./FormField";
import { loginUser, LoginSchema, type LoginData } from "../../api/User";
import "./Auth.css"

export const LoginForm = memo(() => {
    const [formData, setFormData] = useState<LoginData>({
        email: "",
        password: "", 
    });
    
    const [errors, setErrors] = useState<Partial<LoginData>>({});

    const loginMutation = useMutation({
        mutationFn: () => loginUser(formData),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["user", "current"] });
        },
        onError: (error: Error) => {
            setErrors({ password: error.message }); 
        }
    });

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        
        const result = LoginSchema.safeParse(formData);
        if (!result.success) {
            const fieldErrors: Partial<LoginData> = {};
            result.error.errors.forEach(err => {
                if (err.path[0]) {
                    fieldErrors[err.path[0] as keyof LoginData] = err.message;
                }
            });
            setErrors(fieldErrors);
            return;
        }

        setErrors({});
        loginMutation.mutate();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name as keyof LoginData]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <FormField
                label="Email"
                errorMessage={errors.email}
                htmlFor="email">
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={loginMutation.isPending}
                />
            </FormField>

            <FormField
                label="Пароль"
                errorMessage={errors.password}
                htmlFor="password">
                <input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    disabled={loginMutation.isPending}
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