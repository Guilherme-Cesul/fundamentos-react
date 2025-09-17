import { Card, HStack, SimpleGrid } from "@chakra-ui/react";
import { AddButton } from "@/components/AddButton";
import { ExportButton } from "@/components/ExportButton";
import FilterStatus from "@/components/FilterStatus";
import OtherFilters from "@/components/Filters";
import { SearchCard } from "@/components/SearchCard";
import { DefaultLayout } from "@/layouts/DefaultLayout";

export default function Students() {
  return (
    <DefaultLayout
      title="Gestão de Estudantes"
      description="Gerencie as informações dos estudantes matriculados"
    >
      <Card.Root>
        <Card.Body>
          <SimpleGrid row={2} rowGap={4}/>
          <SearchCard />

          <HStack maxWidth="2/3" align="end" gap={4} mt={8}>
            <FilterStatus />
            <OtherFilters />
            <ExportButton />
            <AddButton />
          </HStack>
        </Card.Body>
      </Card.Root>
    </DefaultLayout>
  );
}
