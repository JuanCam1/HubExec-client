import { z } from "zod";

export const uploadSchema = z.object({
  name: z.string().min(1, {
    message: "El nombre de la aplicación no puede estar vacío",
  }),
  description: z.string().min(1, {
    message: "La descripción de la aplicación no puede estar vacía",
  }),
  version: z.string().min(1, {
    message: "La versión de la aplicación no puede estar vacía",
  }),
  category: z.string().min(1, {
    message: "La categoría de la aplicación no puede estar vacía",
  }),
  type: z.string().min(1, {
    message: "El tipo de la aplicación no puede estar vacío",
  }),
  platform: z.string().min(1, {
    message: "La plataforma de la aplicación no puede estar vacía",
  }),
  file: z.instanceof(File, {
    message: "El archivo de la aplicación no puede estar vacío",
  }),
  state: z.string({
    required_error: "El estado de la aplicación no puede estar vacío",
  }),
});
