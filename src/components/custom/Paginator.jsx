import { VStack } from '@chakra-ui/react'
import React from 'react'

export default function Paginator({current}) {
  return (
    <div style={{borderWidth:1,borderColor:"white",width:10, height:10, borderRadius:50,padding:1, display:"flex", alignItems:"center", justifyContent:"center"}}>
        {current &&
        <div style={{ borderRadius:50, background:"white",width:"90%", height:"90%"}}/>
        }
    </div>
  )
}
