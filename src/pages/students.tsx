import { Heading } from "@chakra-ui/react";
import { DefaultLayout } from "@/layouts/DefaultLayout";

export default function Students() {
  return (
    <DefaultLayout
    title="Gestão de Estudantes"
    description="Gerencie as informações dos estudantes matriculados">
      <Heading color="red">Estudantes</Heading>
    </DefaultLayout>
  );
}
