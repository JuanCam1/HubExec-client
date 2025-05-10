import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useRegister from "./use-register";
import { Eye, EyeOff, Mail, UserRound, UserRoundPlus } from "lucide-react";

const RegisterForm = () => {
  const { form, onSubmit, isVisible, setIsVisible } = useRegister();
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <div className="flex ">
                  <div className="inline-flex items-center px-2 text-sm text-gray-900 border border-e-0 rounded-s-md ">
                    <div className="rounded-full bg-zinc-900 p-1">
                      <UserRound className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    </div>
                  </div>
                  <Input
                    {...field}
                    autoFocus
                    type="text"
                    className="h-10 rounded-none rounded-e-lg block flex-1 min-w-0 w-full text-sm p-2.5 focus-visible:ring-0 focus-visible:border-input"
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <div className="flex ">
                  <div className="inline-flex items-center px-2 text-sm text-gray-900 border border-e-0 rounded-s-md ">
                    <div className="rounded-full bg-zinc-900 p-1">
                      <Mail className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    </div>
                  </div>
                  <Input
                    {...field}
                    type="text"
                    className="h-10 rounded-none rounded-e-lg block flex-1 min-w-0 w-full text-sm p-2.5 focus-visible:ring-0 focus-visible:border-input"
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <div className="flex ">
                  <button
                    onClick={() => {
                      setIsVisible((prev) => {
                        return {
                          ...prev,
                          password: !prev.password,
                        };
                      });
                    }}
                    type="button"
                    className="inline-flex items-center px-2 text-sm text-gray-900 border border-e-0 rounded-s-md cursor-pointer"
                  >
                    <div className="rounded-full bg-zinc-900 p-1">
                      {isVisible.password ? (
                        <EyeOff className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                      ) : (
                        <Eye className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                      )}
                    </div>
                  </button>
                  <Input
                    {...field}
                    type={isVisible.password ? "text" : "password"}
                    className="h-10 rounded-none rounded-e-lg block flex-1 min-w-0 w-full text-sm p-2.5 focus-visible:ring-0 focus-visible:border-input"
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirmar Password</FormLabel>
              <FormControl>
                <div className="flex ">
                  <button
                    onClick={() => {
                      setIsVisible((prev) => {
                        return {
                          ...prev,
                          confirmPassword: !prev.confirmPassword,
                        };
                      });
                    }}
                    type="button"
                    className="inline-flex items-center px-2 text-sm text-gray-900 border border-e-0 rounded-s-md cursor-pointer"
                  >
                    <div className="rounded-full bg-zinc-900 p-1">
                      {isVisible.confirmPassword ? (
                        <EyeOff className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                      ) : (
                        <Eye className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                      )}
                    </div>
                  </button>
                  <Input
                    {...field}
                    type={isVisible.confirmPassword ? "text" : "password"}
                    className="h-10 rounded-none rounded-e-lg block flex-1 min-w-0 w-full text-sm p-2.5 focus-visible:ring-0 focus-visible:border-input"
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-center max-sm:w-full">
          <Button
            type="submit"
            size="lg"
            className="color-btn group transition-all duration-300 cursor-pointer"
          >
            Registrarse
            <UserRoundPlus className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </form>
    </Form>
  );
};
export default RegisterForm;
