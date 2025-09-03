import { Heading } from "@chakra-ui/react";
import { DefaultLayout } from "@/layouts/DefaultLayout";

export default function Teachers() {
  return (
    <DefaultLayout
    title="Gestão de Professores"
    description="Gerencie as informações do corpo decente">
      <Heading color="red">Professores</Heading>
    </DefaultLayout>
  );
}
