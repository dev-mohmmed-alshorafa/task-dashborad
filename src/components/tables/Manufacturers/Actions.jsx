import { Stack } from '@mui/material'
import React from 'react'
import Edit from './Edit'
import Delete from './Delete'

export default function Actions({ item,setItem ,setIsDeleted}) {
  
  return (
    <Stack justifyContent={'center'} direction={'row'} width={'150px'}>
      <Edit setEle={setItem} id={item.id}/>
      <Delete setIsDeleted={setIsDeleted}  id={item.id} />
    </Stack>
  )
}
