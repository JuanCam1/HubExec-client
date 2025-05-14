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
import useUpload from "./use-upload";
import { History, LayoutGrid, Text, Upload } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categories, platforms, types } from "@/data/categories-data";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState, type DragEvent } from "react";

const UploadForm = () => {
  const { formUpload, onSubmit } = useUpload();
  const categoriesSlice = categories.slice(0, 2);

  const [fileName, setFileName] = useState("");
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFileName(e.dataTransfer.files[0].name);
      formUpload.setValue("file", e.dataTransfer.files[0]);
    }
  };

  return (
    <Form {...formUpload}>
      <form
        onSubmit={formUpload.handleSubmit(onSubmit)}
        className="w-[90%] grid grid-cols-1 md:grid-cols-3 gap-8 "
      >
        <FormField
          control={formUpload.control}
          name="name"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>Nombre de la aplicación</FormLabel>
              <FormControl>
                <div className="flex">
                  <div className="inline-flex items-center px-2 text-sm text-gray-900 border border-e-0 rounded-s-md ">
                    <div className="rounded-full bg-zinc-900 p-1">
                      <LayoutGrid className="w-4 h-4 text-gray-500 dark:text-gray-400" />
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
          control={formUpload.control}
          name="version"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Versión</FormLabel>
              <FormControl>
                <div className="flex ">
                  <div className="inline-flex items-center px-2 text-sm text-gray-900 border border-e-0 rounded-s-md ">
                    <div className="rounded-full bg-zinc-900 p-1">
                      <History className="w-4 h-4 text-gray-500 dark:text-gray-400" />
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
          control={formUpload.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tipo de aplicación</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Seleccionar tipo" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {types.map((type) => (
                    <SelectItem key={type.id} value={type.name}>
                      {type.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={formUpload.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tipo de categoria</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Seleccionar categoria" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {categoriesSlice.map((category) => (
                    <SelectItem key={category.id} value={category.name}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={formUpload.control}
          name="platform"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tipo de plataforma</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Seleccionar plataforma" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {platforms.map((platform) => {
                    if (platform.category === formUpload.watch("category")) {
                      return (
                        <SelectItem key={platform.id} value={platform.name}>
                          {platform.name}
                        </SelectItem>
                      );
                    }
                  })}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={formUpload.control}
          name="description"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>Descripción</FormLabel>
              <FormControl>
                <Textarea className="resize-none" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={formUpload.control}
          name="state"
          render={({ field }) => (
            <FormItem className="flex flex-col items-start">
              <FormLabel>Estado</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Seleccionar el estado" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Activo">Activo</SelectItem>
                  <SelectItem value="Inactivo">Inactivo</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="col-span-3 flex justify-center items-center">
          <FormField
            control={formUpload.control}
            name="file"
            render={({ field: { value, onChange, ...fileProps } }) => (
              <FormItem>
                <FormLabel>Archivo de la aplicación</FormLabel>
                <FormControl>
                  <div
                    className={`border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer ${
                      dragActive
                        ? "border-primary bg-primary/5"
                        : "border-muted-foreground/25"
                    }`}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                  >
                    <Input
                      {...fileProps}
                      id="file-upload"
                      type="file"
                      className="hidden"
                      accept=".exe,.dmg,.app,.deb,.rpm,.AppImage,.apk,.ipa,.xapk"
                      onChange={(event) => {
                        setFileName(
                          event.target.files ? event.target.files[0].name : "",
                        );
                        onChange(event.target.files && event.target.files[0]);
                      }}
                    />
                    <Label
                      htmlFor="file-upload"
                      className="cursor-pointer text-center flex flex-col"
                    >
                      <div className="flex items-center justify-center gap-2">
                        <Upload className="size-4 text-muted-foreground mb-2 mx-auto " />
                        <p className="text-sm font-medium mb-1">
                          Arrastra y suelta tu archivo aquí o haz clic para
                          seleccionarlo
                        </p>
                      </div>

                      {fileName && (
                        <p className="text-sm font-medium text-primary mt-2">
                          Archivo seleccionado: {fileName}
                        </p>
                      )}
                    </Label>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="col-span-3 flex justify-center items-center">
          <Button
            type="submit"
            size="lg"
            className="color-btn group transition-all duration-300 cursor-pointer"
          >
            Subir aplicación
          </Button>
        </div>
      </form>
    </Form>
  );
};
export default UploadForm;
