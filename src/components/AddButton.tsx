import { Button, HStack } from "@chakra-ui/react"
import { IoMdPersonAdd } from "react-icons/io"

export function AddButton() {
  return (
    <HStack>
      <Button colorPalette="teal" variant="solid">
        <IoMdPersonAdd /> Adicionar Estudante
      </Button>
    </HStack>
  )
}
