import React from 'react'
import { EmailIcon, EmailShareButton, FacebookIcon, FacebookShareButton, InstapaperIcon, InstapaperShareButton, WhatsappIcon, WhatsappShareButton } from 'react-share'
import { Button, Menu, Portal } from "@chakra-ui/react"

const SelectShare = ({select , url , icon , title}) => {
  return (
    <Menu.Root>
          <Menu.Trigger asChild>
            <Button bg={"transparent"}>
                {icon} 
            </Button>
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner>
              <Menu.Content  display={"grid"} gridTemplateColumns={"repeat(auto-fit, minmax(min(20px, 100%), 1fr))"}>
                <Menu.Item>
                    <FacebookShareButton 
                    url={`https://somdomomento.netlify.app/Article/Post/${encodeURIComponent(String(title).trim())}`}>
                        <FacebookIcon borderRadius={50}/>
                    </FacebookShareButton>
                </Menu.Item>
                <Menu.Item>
                    <WhatsappShareButton url={`https://somdomomento.netlify.app/Article/Post/${encodeURIComponent(String(title).trim())}`}>
                        <WhatsappIcon borderRadius={50}/>
                    </WhatsappShareButton>
                </Menu.Item>
                <Menu.Item>
                    <EmailShareButton url={`https://somdomomento.netlify.app/Article/Post/${encodeURIComponent(String(title).trim())}`}>
                        <EmailIcon borderRadius={50} bgStyle={{backgroundColor:"#f6f6f6"}}/>
                    </EmailShareButton>
                </Menu.Item>
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>
  )
}

export default React.memo(SelectShare)