import { useForm } from "react-hook-form";
import type { z } from "zod";
import { uploadSchema } from "./upload-schema";
import { zodResolver } from "@hookform/resolvers/zod";

const useUpload = () => {
  const formUpload = useForm<z.infer<typeof uploadSchema>>({
    resolver: zodResolver(uploadSchema),
    defaultValues: {
      name: "",
      description: "",
      version: "",
      category: "",
      type: "",
      platform: "",
      state: "pending",
    },
  });

  const onSubmit = (values: z.infer<typeof uploadSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  };

  return {
    formUpload,
    onSubmit,
  };
};

export default useUpload;
