import {
  Card,
  createListCollection,
  HStack,
  SimpleGrid,
} from "@chakra-ui/react";
import { useState } from "react";
import { AddButton } from "./AddButton";
import { ExportButton } from "./ExportButton";
import FilterButton from "./FilterButton";
import FilterSelect from "./FilterSelect";
import { SearchInput } from "./SearchInput";

export function StudentsHeader() {
  const status = createListCollection({
    items: [
      { label: "Ativos", value: "ativos" },
      { label: "Inativos", value: "inativos" },
      { label: "Formados", value: "formados" },
    ],
  });

  const [valueFilter, setValueFilter] = useState<string[]>([]);

  return (
    <HStack>
      <Card.Root>
        <Card.Body>
          <SimpleGrid row={2} rowGap={4}>
            <SearchInput
              placeholder="Buscar por nome, email ou curso..."
              value=""
              onChange={(e) => console.log(e.target.value)}
            />

            <HStack>
              <FilterSelect
                placeholder="Todos os Status"
                collection={status}
                value={valueFilter}
                onValueChange={(e) => setValueFilter(e.value)}
              />
              <FilterButton />
              <ExportButton />
              <AddButton> Novo Estudante </AddButton>
            </HStack>
          </SimpleGrid>
        </Card.Body>
      </Card.Root>
    </HStack>
  );
}
