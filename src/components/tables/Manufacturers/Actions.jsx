import { Stack } from '@mui/material'
import React from 'react'
import Edit from './Edit'
import Delete from './Delete'

export default function Actions({ item }) {
  return (
    <Stack justifyContent={'center'} direction={'row'} width={'150px'}>
      <Edit id={item.id}/>
      <Delete id={item.id} />
    </Stack>
  )
}
