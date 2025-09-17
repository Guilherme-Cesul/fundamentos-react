import { Input, InputGroup } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";

export function SearchCard() {
  return (
    <InputGroup maxWidth="45%" startElement={<LuSearch />}>
      <Input placeholder="Nome do estudante" />
    </InputGroup>
  );
}
