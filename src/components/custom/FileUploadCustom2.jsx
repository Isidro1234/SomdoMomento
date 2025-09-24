import { Button, FileUpload } from '@chakra-ui/react'
import React from 'react'
import { HiUpload } from "react-icons/hi"
export default function FileUploadCustom2({placeholder, onchanges}) {
  return (
    <FileUpload.Root>
      <FileUpload.HiddenInput onChange={(e)=>onchanges(e.target.files[0])} />
      <FileUpload.Trigger asChild>
        <Button variant="outline" size="sm">
          <HiUpload /> {placeholder}
        </Button>
      </FileUpload.Trigger>
      <FileUpload.List />
    </FileUpload.Root>
  )
}
