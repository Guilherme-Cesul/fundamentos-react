import {
  ColorPalette,
  Flex,
  Heading,
  HStack,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import { IconType } from "react-icons";

interface RecentActivityProps {
  title: string;
  dateTime: string;
  colorPallete: ColorPalette;
  icon: IconType;
}

export function RecentActivity({
  title,
  dateTime,
  colorPallete,
  icon,
}: RecentActivityProps) {
  return (
    <HStack _hover={{ backgroundColor: "gray.50", rounded: "md" }} p={4} gap={6}>
      <Flex
        justify="center"
        align="center"
        backgroundColor={`${colorPallete}.100`}
        rounded="lg"
        p={2}
      >
        <Icon as={icon} size="xl" color={`${colorPallete}.700`} />
      </Flex>
      <VStack align="start" gap={1}>
        <Heading>{title}</Heading>
        <Text>{dateTime}</Text>
      </VStack>
    </HStack>
  );
}
