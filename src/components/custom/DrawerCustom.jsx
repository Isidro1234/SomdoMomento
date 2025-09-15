import { Button, CloseButton, Drawer, Portal } from "@chakra-ui/react"
import * as Icon from 'react-bootstrap-icons';
import { Link } from "react-router";
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
                <li><Link style={{display:"flex", alignItems:"center", gap:4}} to={"/"}><Icon.HouseFill/> Paginal Inicial</Link></li>
                <li><Link style={{display:"flex", alignItems:"center", gap:4}} to={"/Music"}><Icon.MusicNote/>Musicas</Link></li>
                <li><Link style={{display:"flex", alignItems:"center", gap:4}} to={"/Noticias"}><Icon.Newspaper/>Noticias</Link></li>
                <li><Link style={{display:"flex", alignItems:"center", gap:4}} to={"/Destaque"}><Icon.MusicPlayer/>Destaques</Link></li>
                <li><Link style={{display:"flex", alignItems:"center", gap:4}} to={"/Sobre"}><Icon.Person/>Sobre nos</Link></li>
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
