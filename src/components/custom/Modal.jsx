import { Button, Menu, Portal } from "@chakra-ui/react"
import { useState } from "react"
import * as Icon from "react-bootstrap-icons"
const Modal = ({emojiset}) => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button bg={"transparent"}>
            <Icon.EmojiSmile color="black"/>  
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content  display={"grid"} gridTemplateColumns={"repeat(auto-fit, minmax(min(20px, 100%), 1fr))"}>
            <Menu.Item onClick={()=>{emojiset("😀")}} value="😀">
              😀
            </Menu.Item>
            <Menu.Item onClick={()=>{emojiset("😁")}} value="😁">
              😁
            </Menu.Item>
            <Menu.Item onClick={()=>{emojiset("😍")}} value="😍">
              😍
            </Menu.Item>
            <Menu.Item onClick={()=>{emojiset("😳")}} value=" 😳">
              😳
            </Menu.Item>
            <Menu.Item onClick={()=>{emojiset("😎")}} value="😎">
              😎
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}
export default Modal