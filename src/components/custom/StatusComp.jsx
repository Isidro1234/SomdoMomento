import React from 'react'
import { Button, Dialog, Image, Portal, VStack } from "@chakra-ui/react"
export default function StatusComp({icon, media}) {
  return (
   

<Dialog.Root placement={"center"}>
      <Dialog.Trigger asChild>
        <Button bg={"#f6f6f6"} padding={2} width={"fit-content"} height={"fit-content"} borderRadius={50} >{icon}</Button>
      </Dialog.Trigger>
      <Portal >
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Status</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
                <VStack>
                    <VStack>
                        <Image borderRadius={10} minH={100} height={"100%"} maxH={400} src='https://images.pexels.com/photos/32715514/pexels-photo-32715514.jpeg' minW={200} width={"100%"} maxW={300}/>
                    </VStack>
                    <VStack>
                        
                    </VStack>
                </VStack>
              
            </Dialog.Body>
            <Dialog.Footer>
        

              <Dialog.Root>
                <Portal>
                  <Dialog.Backdrop />
                  <Dialog.Positioner>
                    <Dialog.Content>
                      <Dialog.Header>
                        <Dialog.Title>Dialog Title</Dialog.Title>
                      </Dialog.Header>
                      <Dialog.Body>
                       
                      </Dialog.Body>
                    </Dialog.Content>
                  </Dialog.Positioner>
                </Portal>
              </Dialog.Root>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>

  )
}
