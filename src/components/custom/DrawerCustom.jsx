import { Button, CloseButton, Drawer, Portal } from "@chakra-ui/react"
import * as Icon from 'react-bootstrap-icons';
const DrawerCustom = ({children}) => {
  return (
    <Drawer.Root>
      <Drawer.Trigger asChild>
        <Button color={"white"} borderRadius={50} background={'transparent'} >
          {children}
        </Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>Menu </Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <ul>
                <li><Icon.HouseFill/> Paginal Inicial</li>
                <li><Icon.MusicNote/>Musicas</li>
                <li><Icon.Newspaper/>Noticias</li>
                <li><Icon.MusicPlayer/>Destaques</li>
                <li><Icon.Person/>Sobre nos</li>
              </ul>
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
export default DrawerCustom
