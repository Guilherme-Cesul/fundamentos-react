import { Flex, Group, IconButton, Image, Separator } from "@chakra-ui/react";
import {
  IoIosMenu,
  IoMdHelpCircle,
  IoMdMoon,
  IoMdNotifications,
  IoMdSettings,
  IoMdSunny,
} from "react-icons/io";
import { Avatar } from "@/components/ui/avatar";
import { useColorMode } from "@/components/ui/color-mode";
import { Logo } from "./Logo";

export function DefaultHeader() {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Flex flexDir="column">
      <Flex
        w="full"
        justify="space-between"
        borderBottomWidth={1}
        py={2}
        px={4}
      >
        <Flex align="center" gap={4}>
          <IconButton variant="outline">
            <IoIosMenu />
          </IconButton>

          <Logo/>
        </Flex>

        <Group>
          <IconButton variant="ghost" rounded="full">
            <IoMdNotifications />
          </IconButton>

          <IconButton variant="ghost" rounded="full">
            <IoMdHelpCircle />
          </IconButton>

          <IconButton variant="ghost" rounded="full">
            <IoMdSettings />
          </IconButton>

          <IconButton variant="ghost" rounded="full" onClick={toggleColorMode}>
            {colorMode === "dark" ? <IoMdMoon /> : <IoMdSunny />}
          </IconButton>

          <Separator h={6} colorPalette="gray" orientation="vertical" mx={2} />

          <Avatar
            name="Guilherme Sartori"
            colorPalette="purple"
            src=""
          />
        </Group>
      </Flex>
    </Flex>
  );
}