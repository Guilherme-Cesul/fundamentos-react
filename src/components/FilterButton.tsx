import { Button, ButtonProps, Card, Menu, Portal } from "@chakra-ui/react";
import { BiFilterAlt } from "react-icons/bi";

export default function FilterButton({ ...rest }: ButtonProps) {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" {...rest}>
          <BiFilterAlt />
          Filtros
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content padding={0}>
            <Card.Root width="320px">
              <Card.Body gap="2">
                <Card.Title mt="2">Filtros</Card.Title>
                <Card.Description>

                </Card.Description>
              </Card.Body>
              <Card.Footer justifyContent="flex-end">
                <Button variant="outline">Cancelar</Button>
                <Button colorPalette="purple">Aplicar</Button>
              </Card.Footer>
            </Card.Root>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}
