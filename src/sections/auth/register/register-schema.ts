import { z } from "zod";

export const registerSchema = z
  .object({
    name: z
      .string()
      .min(8, {
        message: "Nombre es muy corto",
      })
      .max(50, {
        message: "Nombre es muy largo",
      }),
    email: z.string().email({
      message: "Email inválido",
    }),
    password: z
      .string()
      .min(8, { message: "Contraseña es muy corta" })
      .max(50, { message: "Contraseña es muy larga" })
      .refine((value) => !/\s/.test(value), {
        message: "Contraseña no puede tener espacios en blanco",
      })
      .refine((value) => /[A-Z]/.test(value), {
        message: "Contraseña debe tener al menos una letra mayúscula",
      })
      .refine((value) => /[0-9]/.test(value), {
        message: "Contraseña debe tener al menos un número",
      })
      .refine((value) => /[^A-Za-z0-9]/.test(value), {
        message: "Contraseña debe tener al menos un símbolo",
      }),

    confirmPassword: z.string().min(8).max(50),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Las contraseñas no coinciden",
  });
