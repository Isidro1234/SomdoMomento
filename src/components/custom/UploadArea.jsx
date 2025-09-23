import React from 'react'
import { Box, FileUpload, Icon } from "@chakra-ui/react"
import { LuUpload } from "react-icons/lu"
export default function UploadArea({onchanges}) {

  return (
    <FileUpload.Root maxW="xl" alignItems="stretch" maxFiles={1}>
      <FileUpload.HiddenInput  onChange={(e)=>onchanges(e.target.files[0])}/>
      <FileUpload.Dropzone>
        <Icon size="md" color="fg.muted">
          <LuUpload />
        </Icon>
        <FileUpload.DropzoneContent>
          <Box>coloque sua musica aqui</Box>
          <Box color="fg.muted">a musica pode ter ate 5MB</Box>
        </FileUpload.DropzoneContent>
      </FileUpload.Dropzone>
      <FileUpload.List />
    </FileUpload.Root>
  )
}
