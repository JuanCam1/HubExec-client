import Table from "@/components/shared/table/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, MonitorDown } from "lucide-react";

const DownloadTable = () => {
  return (
    <Table className="w-full lg:w-[90%] rounded-md">
      <Table.THeader className="w-full">
        <Table.ThCell className="md:w-[40%] lg:w-[40%] text-left pl-2">
          Nombre
        </Table.ThCell>
        <Table.ThCell className="md:w-[15%] lg:w-[15%]">Versión</Table.ThCell>
        <Table.ThCell className="md:w-[15%] lg:w-[15%]">Tipo</Table.ThCell>
        <Table.ThCell className="md:w-[15%] lg:w-[15%]">Categoria</Table.ThCell>
        <Table.ThCell className="md:w-[15%] lg:w-[15%]">Ver</Table.ThCell>
      </Table.THeader>
      <Table.TBody>
        <Table.TRow>
          <Table.TdCell className="text-left">CommandList</Table.TdCell>
          <Table.TdCell className="text-center">1.0.0</Table.TdCell>
          <Table.TdCell className=" text-center">Productividad</Table.TdCell>
          <Table.TdCell className="flex justify-center">
            <Badge
              variant="outline"
              className="flex justify-center items-center gap-1 px-1 py-2 lg:w-[60%]"
            >
              <MonitorDown className="w-4 h-4" />
              <span>Desktop</span>
            </Badge>
          </Table.TdCell>

          <Table.TdCell>
            <Button
              variant="outline"
              className="dark:text-white dark:bg-zinc-950 cursor-pointer"
              size="sm"
              onClick={() => null}
            >
              <Eye className="w-4 h-4" />
            </Button>
          </Table.TdCell>
        </Table.TRow>
        <Table.TRow>
          <Table.TdCell className="text-left">CommandList</Table.TdCell>
          <Table.TdCell className="text-center">1.0.0</Table.TdCell>
          <Table.TdCell className=" text-center">Productividad</Table.TdCell>
          <Table.TdCell className="flex justify-center">
            <Badge
              variant="outline"
              className="flex justify-center items-center gap-1 px-1 py-2 lg:w-[60%]"
            >
              <MonitorDown className="w-4 h-4" />
              <span>Desktop</span>
            </Badge>
          </Table.TdCell>

          <Table.TdCell>
            <Button
              variant="outline"
              className="dark:text-white dark:bg-zinc-950 p-1"
              size="sm"
              onClick={() => null}
            >
              <Eye className="w-4 h-4" />
            </Button>
          </Table.TdCell>
        </Table.TRow>
        <Table.TRow>
          <Table.TdCell className="text-left">CommandList</Table.TdCell>
          <Table.TdCell className="text-center">1.0.0</Table.TdCell>
          <Table.TdCell className=" text-center">Productividad</Table.TdCell>
          <Table.TdCell className="flex justify-center">
            <Badge
              variant="outline"
              className="flex justify-center items-center gap-1 px-1 py-2 lg:w-[60%]"
            >
              <MonitorDown className="w-4 h-4" />
              <span>Desktop</span>
            </Badge>
          </Table.TdCell>

          <Table.TdCell>
            <Button
              variant="outline"
              className="dark:text-white dark:bg-zinc-950"
              size="sm"
              onClick={() => null}
            >
              <Eye className="w-4 h-4" />
            </Button>
          </Table.TdCell>
        </Table.TRow>
      </Table.TBody>
    </Table>
  );
};
export default DownloadTable;
