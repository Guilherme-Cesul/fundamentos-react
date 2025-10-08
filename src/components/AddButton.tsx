import { Button, ButtonProps } from "@chakra-ui/react"
import { IoMdPersonAdd } from "react-icons/io"

export function AddButton({ children, ...rest}: ButtonProps) {
  return (
      <Button colorPalette="purple" {...rest}>
        <IoMdPersonAdd /> {children}
      </Button>
  )
}
