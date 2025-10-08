import { Button, HStack } from "@chakra-ui/react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React from "react";
import { StudentsHeader } from "@/components/StudentsHeader";
import { DefaultLayout } from "@/layouts/DefaultLayout";


type Student = {
  name: string;
  course: string;
  semester: string;
  enrollment: string;
  actions: string;
};

const defaultData: Student[] = [
  {
    name: "tanner",
    course: "Engenharia",
    semester: "5º Semestre",
    enrollment: "2021.1",
    actions: "",
  },
  {
    name: "tandy",
    course: "Engenharia",
    semester: "5º Semestre",
    enrollment: "2021.1",
    actions: "",
  },
  {
    name: "joe",
    course: "Engenharia",
    semester: "5º Semestre",
    enrollment: "2021.1",
    actions: "",
  },
];

const columnHelper = createColumnHelper<Student>();

const columns = [
  columnHelper.accessor('name', {
    cell: info => info.getValue(),
    footer: info => info.column.id,
  }),
  columnHelper.accessor(row => row.course, {
    id: 'Curso',
    cell: info => <i>{info.getValue()}</i>,
    header: () => <span>Curso</span>,
    footer: info => info.column.id,
  }),
  columnHelper.accessor('semester', {
    header: () => 'Semestre',
    cell: info => info.renderValue(),
    footer: info => info.column.id,
  }),
  columnHelper.accessor('enrollment', {
    header: () => <span>Matricula</span>,
    footer: info => info.column.id,
  }),
  columnHelper.accessor('actions', {
    header: 'Ações',
    footer: info => info.column.id,
  }),
]

export default function Students() {
  const [data, _setData] = React.useState(() => [...defaultData]);
  const rerender = React.useReducer(() => ({}), {})[1];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <DefaultLayout
      title="Gestão de Estudantes"
      description="Gerencie as informações dos estudantes matriculados"
    >
      <HStack>
        <StudentsHeader />
        <div className="p-2">
          <table>
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
            <tfoot>
              {table.getFooterGroups().map((footerGroup) => (
                <tr key={footerGroup.id}>
                  {footerGroup.headers.map((header) => (
                    <th key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.footer,
                            header.getContext(),
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </tfoot>
          </table>
          <div className="h-4" />
          <Button onClick={() => rerender()} className="border p-2">
            Rerender
          </Button>
        </div>
        {/* Estudante / Curso / Semestre / Matricula / Ações */}
      </HStack>
    </DefaultLayout>
  );
}
