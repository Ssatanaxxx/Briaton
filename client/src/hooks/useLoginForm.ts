export const useLoginForm = () => {
  const [values, setValues] = useState({ /* ... */ });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => { /* ... */ };

  return { values, errors, handleChange, validate };
};