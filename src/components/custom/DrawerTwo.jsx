import { Button, CloseButton, Drawer, Portal } from "@chakra-ui/react"
import * as Icon from 'react-bootstrap-icons';
import { Link } from "react-router";
const DrawerTwo = ({icon , children}) => {
  return (
    <Drawer.Root >
      <Drawer.Trigger asChild>
        <Button color={"white"} borderRadius={50} background={'transparent'} >
          {icon}
        </Button>
      </Drawer.Trigger>
      <Portal >
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content background={"#242424ff"}>
            <Drawer.Header>
              <Drawer.Title color={"white"}>Menu </Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              {children}
            </Drawer.Body>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}
export default DrawerTwo
