import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { z } from "zod";

import { registerSchema } from "./register-schema";

const useRegister = () => {
  const [isVisible, setIsVisible] = useState({
    password: false,
    confirmPassword: false,
  });

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (values: z.infer<typeof registerSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  };

  return {
    form,
    onSubmit,
    isVisible,
    setIsVisible,
  };
};
export default useRegister;
