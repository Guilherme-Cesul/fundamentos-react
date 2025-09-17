import { Button, DownloadTrigger, FormatByte } from "@chakra-ui/react";
import { LuDownload } from "react-icons/lu";

const data = "Gestão do Estudante Selecionado";
export function ExportButton() {
  return (
    <DownloadTrigger
      data={data}
      fileName="sample.txt"
      mimeType="text/plain"
      asChild
    >
      <Button variant="outline" size="md">
        <LuDownload /> Exportar (
        <FormatByte value={data.length} unitDisplay="narrow" />)
      </Button>
    </DownloadTrigger>
  );
}
