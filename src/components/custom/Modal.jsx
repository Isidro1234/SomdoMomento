import { Button, Menu, Portal } from "@chakra-ui/react"
import * as Icon from "react-bootstrap-icons"
const Modal = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button bg={"transparent"}>
          <Icon.EmojiSmile color="black"/>
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content display={"grid"} gridTemplateColumns={"repeat(auto-fit, minmax(min(20px, 100%), 1fr))"}>
            <Menu.Item value="new-txt-a">
              😀
            </Menu.Item>
            <Menu.Item value="new-file-a">
              😁
            </Menu.Item>
            <Menu.Item value="new-win-a">
              😍
            </Menu.Item>
            <Menu.Item value="open-file-a">
              😳
            </Menu.Item>
            <Menu.Item value="export-a">
              😎
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}
export default Modal