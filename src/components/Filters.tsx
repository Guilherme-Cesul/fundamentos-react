import { Button, Menu, Portal } from "@chakra-ui/react";
import { BiFilterAlt } from "react-icons/bi";

export default function OtherFilters() {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="md">
          <BiFilterAlt />
         Filtros
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="new-txt">New Text File</Menu.Item>
            <Menu.Item value="new-file">New File...</Menu.Item>
            <Menu.Item value="new-win">New Window</Menu.Item>
            <Menu.Item value="open-file">Open File...</Menu.Item>
            <Menu.Item value="export">Export</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}
